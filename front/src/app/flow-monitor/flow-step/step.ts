export interface Step {
  id: number;
  label: string;
  link?: Link;
  addon?: Addons;
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

export enum Addons {
  searchDialog = 'search-university',
  majorDialog = 'select-major'
}
