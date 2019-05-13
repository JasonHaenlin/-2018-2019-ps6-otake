const BaseModel = require('./base-model');

module.exports = new BaseModel('speciality', t => {
  t.increments('id').primary();
  t.string('name');
  t.string('shorthand', 10);
  t.string('small_picture');
  t.string('big_picture');
  t.string('description', 1000);
  t.string('topics_card', 255);
  t.string('topics_details', 2048);
  t.string('career', 1024);
},
[
  {
    id: 0,
    name: 'Architecture Logicielle',
    shorthand: 'AL',
    small_picture: 'https://cdn.techopedia.com/images/uploads/analog-clock-clock-diagram-plan-alarm-clock.jpg',
    big_picture: 'https://cdn.techopedia.com/images/uploads/analog-clock-clock-diagram-plan-alarm-clock.jpg',
    description: 'L’architecture logicielle décrit d’une manière symbolique et schématique les différents éléments' +
        ' d’un ou de plusieurs systèmes informatiques, leurs interrelations et leurs interactions. Contrairement' +
        ' aux spécifications produites par l’analyse fonctionnelle, le modèle d\'architecture, produit lors de la' +
        ' phase de conception, ne décrit pas ce que doit réaliser un système informatique mais plutôt comment il ' +
        'doit être conçu de manière à répondre aux spécifications. L’analyse décrit le « quoi faire » alors que' +
        ' l’architecture décrit le « comment le faire ».',
    topics_card: 'Software Architecure, Cloud And Software Modeling',
    topics_details: '',
    career: ''
  },
  {
    id: 1,
    name: 'Interface Homme-Machine',
    shorthand: 'IHM',
    small_picture: 'https://lemonadverts.com/wp-content/uploads/2018/04/app-design.png',
    big_picture: 'https://lemonadverts.com/wp-content/uploads/2018/04/app-design.png',
    description: 'Les interactions Homme-machines (IHM) définissent les moyens et outils mis en œuvre afin qu\'un humain ' +
        'puisse contrôler et communiquer avec une machine. Les ingénieurs en ce domaine étudient la façon dont les' +
        ' humains interagissent avec les ordinateurs ou entre eux à l\'aide d\'ordinateurs, ainsi que la façon de' +
        ' concevoir des systèmes qui soient ergonomiques, efficaces, faciles à utiliser ou plus généralement' +
        ' adaptés à leur contexte d\'utilisation.',
    topics_card: 'Réaliser des IHM (réparties ou pas) utilisables et utiles quelque soit ' +
        'le contexte d’usage (Utilisateurs, Dispositifs, Environnements)',
    topics_details: '',
    career: ''
  },
  {
    id: 2,
    name: 'Intelligence Ambiante',
    shorthand: 'IAM',
    small_picture: 'https://s22908.pcdn.co/wp-content/uploads/2017/01/what-is-internet-of-things.jpg',
    big_picture: 'https://s22908.pcdn.co/wp-content/uploads/2017/01/what-is-internet-of-things.jpg',
    description: 'L\'intelligence ambiante est le produit de l`\'informatique qui, en repoussant les limites technologiques' +
        ' de manière disruptive, remet en cause le concept même de système d’information ou d\'ordinateur : d’une ' +
        'activité de traitement exclusivement centrée sur l’utilisateur jusqu\'à la fin du xxe siècle, l\'intelligence ' +
        'ambiante vise à régir les interactions entre objets communicants et humains2.',
    topics_card: 'Elle ouvre à presque tous les objets de la vie courante, la capacité à déclencher un échange spontané' +
        ' d\'informations, sans interaction avec leur utilisateur3.',
    topics_details: '',
    career: ''
  },
  {
    id: 3,
    name: 'Sciences, Technologies, Ressources et Applications du Web',
    shorthand: 'Web',
    small_picture: 'https://www.infotyke.com/wp-content/uploads/2018/02/web-development-service-infotyke.png',
    big_picture: 'https://www.infotyke.com/wp-content/uploads/2018/02/web-development-service-infotyke.png',
    description: 'Toutes les entreprises aujourd’hui, même parmi les PME, se doivent d’avoir un site internet, gage de ' +
        'visibilité et de crédibilité. Si certaines grandes sociétés ont les moyens de compter à plein temps des' +
        ' professionnels du web, beaucoup font appel à des prestataires, les web-agencies, pour concevoir leur site' +
        ' web et gérer leur contenu. Les profils recherchés sont alors des webdesigners, développeurs, flasheurs, ' +
        'webmasters et autres ergonomes web. Avec le développement des réseaux sociaux, d’autres enjeux émergent aussi' +
        ' comme l’e-réputation ou la modération, via la fonction de community manager.',
    topics_card: 'Développement d\'applications web\nOrientation gestion de l\'information et des données du web\n' +
        'Web intelligence, Web science, Intelligence artificielle',
    topics_details: '',
    career: ''
  },
  {
    id: 4,
    name: 'Informatique et Mathématiques Appliquées à la Finance et à l\'Assurance',
    shorthand: 'IMAFA',
    // eslint-disable-next-line max-len
    small_picture: 'https://www.lakewoodwater.org/sites/default/files/styles/gallery500/public/imageattachments/finance/page/92/finance.jpg?itok=bKaAVbeW',
    // eslint-disable-next-line max-len
    big_picture: 'https://www.lakewoodwater.org/sites/default/files/styles/gallery500/public/imageattachments/finance/page/92/finance.jpg?itok=bKaAVbeW',
    description: 'IMAFA a pour objectif de former des ingénieurs maîtrisant : les concepts et outils mathématiques nécessaires à' +
        ' la conception et à la réalisation de systèmes d\'information financiers, les outils ' +
        'informatiques pour la mise en œuvre, les concepts inhérents à la finance et l’assurance\n' +
        'Au sein d\'IMAFA, il ne s\'agit pas de former des financiers, mais bien des informaticiens ' +
        'possédant les connaissances mathématiques et financières pour apporter une réelle valeur ' +
        'ajoutée dans la mise en oeuvre de systèmes d\'information dans les secteurs de la banque, ' +
        'de l\'assurance et de la finance. Le souci d\'atteindre l\'excellence dans les deux ' +
        'disciplines des sciences de l\'ingénieur qui constituent les fondements d\'IMAFA, à ' +
        'savoir l\'informatique et les mathématiques, a conduit l\'Université de Nice Sophia ' +
        'Antipolis et l\'INRIA à s\'associer pour concevoir et développer un programme sans équivalent en Europe. ',
    topics_card: 'Mathématiques appliquées à la finance, Valorisation des données, Programmation parallèle',
    topics_details: 'Le programme des enseignements s\'articule naturellement autour de trois axes : ' +
        'informatique, mathématiques et finance complété par des matières associées destinées à favoriser ' +
        'l\'insertion professionnelle des étudiants de la filière IMAFA.\nLes cours sont en majorité des cours ' +
        'communs au programme de la filière IMAFA de la cinquième année des ingénieurs en "Sciences Informatiques"' +
        ' ou « Mathématiques Appliquées et Modélisation » de Polytech\'Nice-Sophia.\nUn projet "fil rouge" commun ' +
        'sert de mise en oeuvre pratique aux cours d\'informatique, de mathématique et de finance. Tous les travaux ' +
        'pratiques font référence à ce projet fédérateur. ',
    career: 'Le Master IMAFA prépare des ingénieurs informaticiens à l\'exercice de responsabilités ' +
        'très rapidement après leur sortie de l\'école. Les étudiants sont souvent embauchés avant ' +
        'même la fin de leur formation. Les postes occupés par les anciens élèves sont de plusieurs ' +
        'types :\n\n\t• ingénieur logiciel ou responsable de projet informatique: développement, tests, ' +
        'support\n\t• ingénieur financier\n\t• consultant en systèmes d\'information financiers ou ' +
        'bancaires\n\t• ingénieur mathématicien participant à la réalisation de modèles financiers\n\t• ' +
        'assistant trader\n\t• analyste quantitatif\n\nLes domaines de compétences où sont particulièrement ' +
        'appréciées les compétences des diplômés IMAFA sont :\n\n\t• les systèmes d\'aide à la décision en ' +
        'temps réel pour les salles de marché\n\t• les logiciels d\'application dédiés à la gestion et à ' +
        'l\'évaluation des produits dérivés\n\t• les logiciels de gestion quantitative de portefeuilles ' +
        '\n\t• les systèmes de gestion des risques\n\t• la conception d\'outil, l\'allocation d\'actifs et ' +
        'l\'optimisation des décisions d\'investissement\n\t• les systèmes d\'attribution de performance et ' +
        'd\'allocation de fonds propres. '
  },
  {
    id: 5,
    name: 'Science des Données',
    shorthand: 'SD',
    small_picture: 'https://www.techpathway.com/images/datascience/data-analytics-services.jpg',
    big_picture: 'hhttps://www.techpathway.com/images/datascience/data-analytics-services.jpg',
    description: 'En termes généraux, la science des données est l\'extraction de connaissance d\'ensembles de données.' +
        ' Elle emploie des techniques et des théories tirées de plusieurs autres domaines plus larges des mathématiques,' +
        ' la statistique principalement, la théorie de l\'information et la technologie de l\'information, notamment le' +
        ' traitement de signal, des modèles probabilistes, l\'apprentissage automatique, l\'apprentissage statistique,' +
        ' la programmation informatique, l\'ingénierie de données, la reconnaissance de formes et l\'apprentissage, ' +
        'la visualisation, l\'analytique prophétique, la modélisation d\'incertitude, le stockage de données, la ' +
        'compression de données et le calcul à haute performance. Les méthodes qui s\'adaptent aux données de masse' +
        ' sont particulièrement intéressantes dans la science des données, bien que la discipline ne soit généralement' +
        ' pas considérée comme limitée à ces données.',
    topics_card: 'Aéronautique, Assurance, Automobile, Agriculture, Banque',
    topics_details: '',
    career: ''
  }
]);
