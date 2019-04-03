export interface Step {
  id: number;
  label: string;
  description: TextDetail[];
}

export interface TextDetail {
  text: string;
  redirection?: string;
  link?: string;
}
