import { Step, TextDetail } from './../flow-step/step';

export const STEP_LIST: Step[] = [
  {
    id: 1,
    label: 'Trouver une destination',
    description: [
      { text: 'Aller dans "Universités d\'échanges" et sélectionner une destination' },
      { text: 'Filtrer par formation pour voir les Universités vous concernants' },
    ]
  },
  {
    id: 2,
    label: 'Estimer le coût de la vie',
    description: [
      { text: 'Vérifier le coût de la vie d\'une université Dans les détails de celle-ci' },
      { text: 'Aller dans la section "Aides Financière"' },
    ]
  },
  {
    id: 3,
    label: 'Choisir ses cours',
    description: [
      { text: 'Aller dans "Notre école" par rapport à votre cursus' },
      { text: 'Chercher une "Spécialité" qui vous plait' },
      { text: 'Prener connaissance des "Thématiques des cours"' },
      { text: 'Penser à feuilleter les anciens contrats' },
    ]
  },
  {
    id: 4,
    label: 'Renseignements personnels',
    description: [
      {
        text: 'Télécharger le dossier de mobilité sur le site de "Polytech Nice"',
        link: 'http://unice.fr/polytechnice/fr/international/etudes-a-letranger/partir-a-letranger'
      },
      {
        text: 'Vérifier vos cours et les équivalences aux ECTS qui varies selon la destination',
      },
    ],
  },
  {
    id: 5,
    label: 'Constituer son budget prévisionel',
    description: [
      { text: 'Penser à vérifier les "Aides Financières" si besoin' },
      { text: 'Remplir soignesement le budget pour éviter les mauvaises surprises' },
    ]
  },
  {
    id: 6,
    label: 'Faire son CV Europass',
    description: [
      {
        text: 'Faire son cv en ligne"',
        link: 'https://europass.cedefop.europa.eu/editors/fr/cv/compose'
      },
    ],
  }
];
