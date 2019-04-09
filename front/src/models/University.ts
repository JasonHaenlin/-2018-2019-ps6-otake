import { Language } from './Language';
import { GeographicalArea } from './GeographicalArea';

export interface UniversityCard {
  name?: string;
  admission_rate?: string;
  type_of_file?: string;
  cost_of_living?: string;
  nb_of_place?: number;
  small_picture?: string;
  city?: string;
  country?: string;
  area?: GeographicalArea;
  major?: string[];
  language?: Language[];
}
