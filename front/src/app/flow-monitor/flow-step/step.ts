export interface Step {
  id: number;
  label: string;
  link?: Link;
  addon?: string;
  description: TextDetail[];
}

export interface TextDetail {
  id: number;
  done?: boolean;
  text: string;
}

export interface Link {
  extRef?: string;
  router?: string;
  fragment?: string;
}
