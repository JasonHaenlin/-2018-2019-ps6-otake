import { Step } from './../flow-step/step';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

export const STEP_LIST: Step[] = [
  {
    id: 1,
    label: 'Trouver une destination',
    description: [
      {
        id: 0, text: 'Aller dans "Universités d\'échanges" et sélectionner une destination',
        innerLink: 'exchange-universities'
      },
      {
        id: 1, text: 'Filtrer par formation pour voir les Universités vous concernants',
        innerLink: 'exchange-universities'
      },
    ]
  },
  {
    id: 2,
    label: 'Estimer le coût de la vie',
    description: [
      {
        id: 0, text: 'Vérifier le coût de la vie d\'une université dans les détails de celle-ci',
        innerLink: 'exchange-universities'
      },
      {
        id: 1, text: 'Aller dans la section "Aides Financière"',
        innerLink: 'financial-aids'
      },
    ]
  },
  {
    id: 3,
    label: 'Choisir ses cours',
    description: [
      {
        id: 0, text: 'Aller dans "Notre école" par rapport à votre cursus',
        innerLink: 'home'
      },
      {
        id: 1, text: 'Chercher une "Spécialité" qui vous plait'
      },
      {
        id: 2, text: 'Prener connaissance des "Thématiques des cours"'
      },
      {
        id: 3, text: 'Penser à feuilleter les anciens contrats'
      },
    ]
  },
  {
    id: 4,
    label: 'Renseignements personnels',
    description: [
      {
        id: 0, text: 'Télécharger le dossier de mobilité sur le site de "Polytech Nice"',
        innerLink: '',
        fragment: 'footer'
      },
      {
        id: 1, text: 'Vérifier vos cours et les équivalences aux ECTS qui varies selon la destination'
      },
    ],
  },
  {
    id: 5,
    label: 'Constituer son budget prévisionel',
    description: [
      {
        id: 0, text: 'Penser à vérifier les "Aides Financières" si besoin',
        innerLink: 'financial-aids'
      },
      {
        id: 1, text: 'Remplir soignesement le budget pour éviter les mauvaises surprises'
      },
    ]
  },
  {
    id: 6,
    label: 'Faire son CV Europass',
    description: [
      {
        id: 0, text: 'Faire son cv en ligne"',
        outerLink: 'https://europass.cedefop.europa.eu/editors/fr/cv/compose'
      },
    ],
  }
];
