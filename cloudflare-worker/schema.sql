-- Atlas Blog D1 Schema
CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  seo_title TEXT,
  meta_description TEXT,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT DEFAULT '',
  category TEXT DEFAULT 'General',
  date TEXT NOT NULL,
  read_time TEXT DEFAULT '5 min read',
  faqs TEXT DEFAULT '[]',
  show_contact_form INTEGER DEFAULT 1,
  published INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);
