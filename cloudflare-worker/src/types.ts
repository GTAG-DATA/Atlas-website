export interface Env {
  DB: D1Database;
  KV: KVNamespace;
  ADMIN_PASSWORD: string;
  TOKEN_SECRET: string;
  SITE_URL: string;
  RESEND_API_KEY: string;
}

export interface Post {
  id?: number;
  slug: string;
  title: string;
  seo_title?: string;
  meta_description?: string;
  excerpt: string;
  content: string;
  image_url?: string;
  category: string;
  date: string;
  read_time: string;
  faqs: string; // JSON string of FAQ[]
  show_contact_form: number; // 0 or 1
  published: number; // 0 or 1
  created_at?: string;
  updated_at?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
