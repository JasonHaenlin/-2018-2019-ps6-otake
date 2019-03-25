import {Location, UniversityCard} from '../models/UniversityCard';

export const UNIVERCITY_CARD_MOCKED: UniversityCard[] = [
  {
    name: 'cityU',
    city: 'HongKong',
    major: 'Tous',
    rate_of_accept: '80%',
    type_of_file: 'Dossier Asie',
    cost: '€€€€',
    small_picture: 'https://template.cityu.edu.hk/template/img/logos/cityu.png',
    nb_of_place: 4,
    language: ' Cantonese, English',
    location: Location.Asia,
  },
  {
    name: 'California Institute Of Technology',
    city: 'Pasadena',
    major: 'Tous',
    rate_of_accept: '60%',
    type_of_file: 'Dossier Amérique du Nord',
    cost: '€€€',
    small_picture: 'https://www.caltech.edu/static/core/img/caltech-new-logo.png',
    nb_of_place: 6,
    language: 'English',
    location: Location.North_America,

  }
];
