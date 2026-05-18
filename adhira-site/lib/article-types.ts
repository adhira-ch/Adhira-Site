export interface Article {
  published?: boolean;
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  author?: string;
  tags?: string[];
  coverImage?: string;
  excerpt: string;
  body: string;
}
