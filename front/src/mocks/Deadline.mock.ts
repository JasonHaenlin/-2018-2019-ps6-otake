import { Deadline } from './../models/Deadline';

export const DEADLINE_MOCK: Deadline[] = [
  {
    date: new Date(2019, 1, 11),
    title: '1ère Session',
    details: 'Deadline de rendu de dossier PNS et UNS pour le 1er et 2ème semestre',
  },
  {
    date: new Date(2019, 4, 25),
    title: '2ème Session',
    details: 'Deadline de rendu de dossier PNS et UNS uniquement pour le 2ème semestre',
  },
];
