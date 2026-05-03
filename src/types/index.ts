export interface Course {
  id: string;
  name: string;
  category: string;
  description: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface SectionProps {
  id?: string;
}