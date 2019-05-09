import { environment } from 'src/environments/environment';
import { Step } from './../flow-step/step';

const baseUrl = environment.baseUrl;

export const STEP_LIST: Step[] = [
  {
    id: 1,
    label: 'Trouver une destination',
    link: { router: 'exchange-universities' },
    description: [
      { id: 0, text: 'Aller dans "Universités d\'échanges" et sélectionner une destination', },
      { id: 1, text: 'Filtrer par formation pour voir les Universités vous concernants', },
    ]
  },
  {
    id: 2,
    label: 'Estimer le coût de la vie',
    addon: 'search-university',
    description: [
      { id: 0, text: 'Vérifier le coût de la vie d\'une université dans les détails de celle-ci', },
      { id: 1, text: 'Vous pouvez aussi vérifier les transports en communs et les logements', },
    ]
  },
  {
    id: 3,
    label: 'Choisir ses cours',
    addon: 'select-major',
    description: [
      { id: 0, text: 'Aller dans "Notre école" par rapport à votre cursus', },
      { id: 1, text: 'Chercher une "Spécialité" qui vous plait' },
      { id: 2, text: 'Prener connaissance des "Thématiques des cours"' },
      { id: 3, text: 'Penser à feuilleter les anciens contrats' },
    ]
  },
  {
    id: 4,
    label: 'Renseignements personnels',
    link: { router: 'home', fragment: 'footer' },
    description: [
      { id: 0, text: 'Télécharger le dossier de mobilité sur le site de "Polytech Nice"', },
      { id: 1, text: 'Vérifier vos cours et les équivalences aux ECTS qui varies selon la destination' },
    ],
  },
  {
    id: 5,
    label: 'Constituer son budget prévisionel',
    link: { router: 'financial-aids' },
    description: [
      { id: 0, text: 'Penser à vérifier les "Aides Financières" si besoin', },
      { id: 1, text: 'Remplir soignesement le budget pour éviter les mauvaises surprises' },
    ]
  },
  {
    id: 6,
    label: 'Faire son CV Europass',
    link: { extRef: 'https://europass.cedefop.europa.eu/editors/fr/cv/compose' },
    description: [
      { id: 0, text: 'Faire son cv en ligne"', },
    ],
  }
];
