import { FinancialAid } from './../models/FinancialAid';

export const FINANCIAL_AID_MOCK: FinancialAid[] = [
  {
    name: 'ERASMUS+',
    description: '<p>Erasmus+ est un programme européen d\'échanges d\'étudiants qui vous permet d\'étudier en Europe.' +
      'Le réseau de contacts assure un bon accueil et un accompagnement quotidien dans vos études à l\'étranger.</p>',
    conditionsToApply: '<p><strong><a href="https://www.generation-erasmus.fr/sejour-bourse-erasmus-etudiant/"' +
      'target="_blank" title="Une bourse Erasmus+">Une bourse' +
      'Erasmus+</a></strong> peut vous être attribuée si vous effectuez une partie de vos études...' +
      '<li>dans un <b>pays étranger européen</b></li>' +
      '<li>auprès d\'un<b> établissement de l\'enseignement supérieur</b></li>' +
      '<li>dans le cadre d\'un <strong>échange inter-établissements</strong></li></p>',
    termsOfPayment: '<strong>Erasmus+ études</strong>' +
      '<ul><li>Réservée aux étudiants du programme Erasmus</li>' +
      '<li>Durée de l\’allocation : de 3 à 12 mois</li>' +
      '<li>Montant de l\’allocation Erasmus : de 200 € à 300 €/mois</li></ul>' +
      '<strong>Erasmus+ stages</strong>' +
      '<ul><li>Réservée aux étudiants effectuant un stage en Europe</li>' +
      '<li>Durée de l\’allocation : de 2 à 12 mois</li>' +
      '<li>Montant de l\’allocation : de 300 € à 450 €/mois</li></ul>',
    procedure: '<p>Si vous souhaitez demander une bourse, merci de transmettre votre dossier complet au ' +
      'bureau des relations internationales (205) de Polytech.<br>' +
      'Comptez entre 6 et 12 mois de délai avant le début de votre séjour à l\'étranger.</p>',
    cumul: '<p>La bourse Erasmus + est cumulable avec la bourse AMI, mais n\'est pas cumulable avec une bourse PRAME</p>',

  },
  {
    name: 'AMI',
    description: '<p>L\'aide à la mobilité internationale(AMI) vous permet de suivre une formation supérieure à ' +
      'l\'étranger dans le cadre d\'un programme d\'échanges ou d\'effectuer un stage international.<br>',
    conditionsToApply: '<p>L\'aide à la mobilité internationale(400€ / mois en 2018 / 2019) peut vous être attribuée si vous' +
      'remplissez les conditions suivantes : </p>' +
      '<li> Votre séjour aidé à l\'étranger dure <strong>entre 2 et 9 mois consécutifs</strong>. Au cours de' +
      'l\'ensemble de vos études supérieures, vous ne pouvez cumuler plus 9 mois d\'aide à la mobilité' +
      'internationale.</li><br>' +
      '<li> Vous êtes<b> boursier de l\'enseignement supérieur sur critères sociaux</b> ou bénéficiaire d\'une' +
      'allocation annuelle(dispositif des aides spécifiques) </li><br>' +
      '<li> Vous préparez un diplôme national relevant de la compétence du < b > ministère chargé de' +
      'l\'enseignement supérieur</b>...</li><br>' +
      '<li>...dans un établissement d\'enseignement supérieur public / qui a engagé une démarche de' +
      'contractualisation avec l\'État.</li><br>' +
      '<li> Votre formation ou votre stage à l\'étranger <b>s\'inscrit dans le cadre de votre cursus' +
      'd\'études</b>.</li></p>',
    termsOfPayment: '<p>L\'aide vous sera accordée en fonction de la durée de votre séjour et de certaines spécificités' +
      'telles que l\'éloignement du pays d\'accueil, le coût de la vie du pays choisi.' +
      '<li>L\'aide à la mobilité internationale est <b>cumulable avec une aide au mérite</b></li>' +
      '<li><b>Vous conservez votre bourse sur critères sociaux</b></li>&nbsp;' +
      'Le paiement des aides à la mobilité internationale est confié aux établissements d\'enseignement' +
      'supérieur.</p>',
    procedure: '<p>Si vous souhaitez demander une bourse, merci de transmettre votre dossier complet au ' +
      'bureau des relations internationales (205) de Polytech.</p>',
    cumul: '<p>La bourse AMI est cumulable avec une bourse Erasmus +. Elle n\'est pas cumulable avec une bourse PRAME</p>',
  },
  {
    name: 'PRAME',
    description: '<p>Programme régional d’aide à la mobilité étudiante - ' +
      '<a href="http://www.orientationsud.fr/Aide/Detail/57" target="_blank" title="Une aide PRAME">' +
      'PRAME enseignement supérieur</a> - BOURSES D’ETUDES ET DE STAGE</p>',
    conditionsToApply: '<strong>Bénéficiaires</strong>' +
      '<li>La prise en compte des critères sociaux est obligatoire : le quotient familial de la famille du' +
      'bénéficiaire potentiel ne doit pas excéder 23 000 €.</li>' +
      '<strong>Ressources de l\’étudiant</strong>' +
      '<li>Les étudiants doivent effectuer un séjour d\’études d\’une durée minimum de 3 mois ou un stage d\’une' +
      'durée minimum de 8 semaines dans l\’un des territoires éligibles</li>' +
      '<strong>Pays éligibles :</strong>' +
      '<li>Pays du monde, hormis la France (territoires métropolitain et d’Outre-mer) et Monaco.</li>',
    termsOfPayment: '<p>Etudiant effectuant un séjour d\’études sur un campus de son établissement situé sur un territoire' +
      'éligible :</p>' +
      'Bourse forfaitaire de 400 € pour les étudiants domiciliés fiscalement hors de la région Provence' +
      'Alpes Côte d\’Azur ;' +
      '<p>Bourse forfaitaire de 600 € pour les étudiants domiciliés fiscalement en Provence Alpes Côte d\’Azur.' +
      '<li>Etudiant effectuant un stage ou un séjour d\’études (hors campus) à l\’étranger :</p>' +
      'Bourse mensuelle de 300 € pour les étudiants domiciliés fiscalement hors de la région Provence Alpes' +
      'Côte d\’Azur.</li>' +
      '<li>Bourse mensuelle de 400 € pour les étudiants domiciliés fiscalement en Provence Alpes Côte d\’Azur.</li>' +
      '<li>Dotation mensuelle de 100 € pour les étudiants effectuant leur mobilité sur un territoire avec' +
      'lequel la Région entretient des relations de coopération*.</li>' +
      '<strong>Etudiant en situation de handicap</strong> : forfait supplémentaire de 400 €.',
    procedure: '<p>Si vous souhaitez demander une bourse, merci de transmettre votre dossier complet au ' +
      'bureau des relations internationales (205) de Polytech.</p>',
    cumul: '<p>La bourse PRAME n\'est pas cumulable avec une allocation ERASMUS +, ni avec une bourse AMI du MENESR.</p>',
  }
];
