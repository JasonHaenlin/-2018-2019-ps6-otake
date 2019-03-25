export interface UniversityCard {
  name?: string;
  city?: string;
  major?: string;
  rate_of_accept?: string;
  type_of_file?: string;
  cost?: string;
  small_picture?: string;
  nb_of_place?: number;
  language?: string;
  location?: Location;
}

export enum Location {
  Asia = 'Asie',
  Europe = 'Europe',
  North_America = 'Amérique du Nord',
  South_America = 'Amérique du Sud',
  African = 'Afrique',
  Oceania = 'Australie',
}
