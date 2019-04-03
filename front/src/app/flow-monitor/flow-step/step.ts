export interface Step {
  id: number;
  label: string;
  description: TextDetail[];
}

export interface TextDetail {
  id: number;
  done?: boolean;
  text: string;
  redirection?: string;
  link?: string;
}
