import { UniversityCard } from '../models/UniversityCard';
import { GeographicalArea } from '../models/GeographicalArea';
import { GEOGRAPHICAL_AREA_MOCKED } from './GeographicalArea.mock';

export const UNIVERCITY_CARD_MOCKED: UniversityCard[] = [
  {
    name: 'cityU',
    city: 'HongKong',
    major: ['Tous'],
    admission_rate: '80%',
    type_of_file: 'Dossier Asie',
    cost_of_living: '€€€€',
    small_picture: 'https://template.cityu.edu.hk/template/img/logos/cityu.png',
    nb_of_place: 4,
    language: ['Cantonese', 'English'],
    area: GEOGRAPHICAL_AREA_MOCKED[1],
  },
  {
    name: 'California Institute Of Technology',
    city: 'Pasadena',
    major: ['Tous'],
    admission_rate: '60%',
    type_of_file: 'Dossier Amérique du Nord',
    cost_of_living: '€€€',
    small_picture: 'https://www.caltech.edu/static/core/img/caltech-new-logo.png',
    nb_of_place: 6,
    language: ['English'],
    area: GEOGRAPHICAL_AREA_MOCKED[2],

  }
];
