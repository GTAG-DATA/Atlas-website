import type { Env } from './types';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type,Authorization',
};

export function corsHeaders() {
  return CORS_HEADERS;
}

export function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}

// Generate a token: HMAC-SHA256 of (password + secret)
export async function generateToken(password: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(password));
  return btoa(String.fromCharCode(...new Uint8Array(sig)));
}

// Verify token from Authorization header
export async function verifyToken(request: Request, env: Env): Promise<boolean> {
  const auth = request.headers.get('Authorization');
  if (!auth?.startsWith('Bearer ')) return false;
  const token = auth.slice(7);
  const expected = await generateToken(env.ADMIN_PASSWORD, env.TOKEN_SECRET);
  return token === expected;
}

// POST /api/auth
export async function handleAuth(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
  try {
    const { password } = await request.json() as { password: string };
    if (password !== env.ADMIN_PASSWORD) {
      return json({ error: 'Invalid password' }, 401);
    }
    const token = await generateToken(password, env.TOKEN_SECRET);
    return json({ token });
  } catch {
    return json({ error: 'Invalid request' }, 400);
  }
}
