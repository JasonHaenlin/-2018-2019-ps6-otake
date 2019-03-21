import { Step } from './../flow-step/step';

export const STEP_LIST: Step[] = [
  {
    id: 1,
    label: 'Trouver une destination',
    text: [
      'aller dans la liste des universités concernant une destination',
      'Trier par formation pour avoir vos possibilités'
    ]
  },
  {
    id: 2,
    label: 'Estimer le coût de la vie',
    text: [
      'Vérifier le coût de la vie d\'une université',
      'Aller dans la section Aides Financière'
    ]
  },
  {
    id: 3,
    label: 'Choisir ses cours',
    text: [
      'Aller dans Notre école par rapport à votre cursus',
      'Chercher une spécialité qui vous plait',
      'Prener connaissance des thématiques de cours',
      'Penser à feuilleter les anciens contrats'
    ]
  },
  {
    id: 4,
    label: 'Renseignement personnels',
    text: [
      'Télécharger le dossier de mobilité',
      'Vérifier vos cours (ex: 30 ECTS ou 10 Crédits)'
    ],
    outerLink: 'http://unice.fr/polytechnice/fr/international/etudes-a-letranger/partir-a-letranger'
  },
  {
    id: 5,
    label: 'Constituer son budget prévisionel',
    text: [
      'Penser à vérifier les Aides Financières',
      'Remplir soignesement le budget'
    ]
  },
  {
    id: 6,
    label: 'Faire son CV Europass',
    text: [
      'Faire son cv en ligne',
    ],
    outerLink: 'https://europass.cedefop.europa.eu/editors/fr/cv/compose'
  }
];
