export interface Survey {
  id: number;
  title: string;
  description: string;
  category: string;
  participants: number;
  deadline: string;
  image?: string;
}

export interface Category {
  id: string;
  label: string;
  color?: string;
}
