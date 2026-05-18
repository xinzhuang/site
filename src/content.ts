export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  github: string;
  status: 'live' | 'coming-soon' | 'beta';
  features: string[];
}
