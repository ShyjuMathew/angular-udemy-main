export interface NewsItem {
  source: {
    id: string;
    name: string;
  };
  categories: string[];
  symbols: string[];
  markets: string[];
  title: string;
  content: string;
  description: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
  id: string;
  industries: string[];
  sectors: string[];
}
