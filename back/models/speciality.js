const BaseModel = require('./base-model');

module.exports = new BaseModel('speciality', t => {
  t.increments('id').primary();
  t.string('name');
  t.string('shorthand', 10);
  t.string('small_picture');
  t.string('big_picture');
  t.string('description');
  t.string('topics');
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
    topics: 'Software Architecure, Cloud And Software Modeling'
  },
  {
    id: 1,
    name: 'Interface Homme-Machine',
    shorthand: 'IHM',
    small_picture: 'https://cdn1-shop.mikroe.com/img/product/mikromedia-hmi-70-uxb/mikromedia-hmi-70-uxb-large_default-1.jpg',
    big_picture: 'https://cdn1-shop.mikroe.com/img/product/mikromedia-hmi-70-uxb/mikromedia-hmi-70-uxb-large_default-1.jpg',
    description: 'Les interactions Homme-machines (IHM) définissent les moyens et outils mis en œuvre afin qu\'un humain ' +
        'puisse contrôler et communiquer avec une machine. Les ingénieurs en ce domaine étudient la façon dont les' +
        ' humains interagissent avec les ordinateurs ou entre eux à l\'aide d\'ordinateurs, ainsi que la façon de' +
        ' concevoir des systèmes qui soient ergonomiques, efficaces, faciles à utiliser ou plus généralement' +
        ' adaptés à leur contexte d\'utilisation.',
    topics: 'Réaliser des IHM (réparties ou pas) utilisables et utiles quelque soit ' +
        'le contexte d’usage (Utilisateurs, Dispositifs, Environnements)'
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
    topics: ' elle ouvre à presque tous les objets de la vie courante, la capacité à déclencher un échange spontané' +
        ' d\'informations, sans interaction avec leur utilisateur3.'
  },
  {
    id: 3,
    name: 'Sciences, Technologies, Ressources et Applications du Web',
    shorthand: 'Web',
    small_picture: 'https://webomindapps.com/assets/email/2.png',
    big_picture: 'https://webomindapps.com/assets/email/2.png',
    description: 'Toutes les entreprises aujourd’hui, même parmi les PME, se doivent d’avoir un site internet, gage de ' +
        'visibilité et de crédibilité. Si certaines grandes sociétés ont les moyens de compter à plein temps des' +
        ' professionnels du web, beaucoup font appel à des prestataires, les web-agencies, pour concevoir leur site' +
        ' web et gérer leur contenu. Les profils recherchés sont alors des webdesigners, développeurs, flasheurs, ' +
        'webmasters et autres ergonomes web. Avec le développement des réseaux sociaux, d’autres enjeux émergent aussi' +
        ' comme l’e-réputation ou la modération, via la fonction de community manager.',
    topics: 'Développement d\'applications web\nOrientation gestion de l\'information et des données du web\n' +
        'Web intelligence, Web science, Intelligence artificielle'
  },
  {
    id: 4,
    name: 'Informatique et Mathématiques Appliquées à la Finance et à l\'Assurance',
    shorthand: 'IMAFA',
    // eslint-disable-next-line max-len
    small_picture: 'https://www.lakewoodwater.org/sites/default/files/styles/gallery500/public/imageattachments/finance/page/92/finance.jpg?itok=bKaAVbeW',
    // eslint-disable-next-line max-len
    big_picture: 'https://www.lakewoodwater.org/sites/default/files/styles/gallery500/public/imageattachments/finance/page/92/finance.jpg?itok=bKaAVbeW',
    description: 'Former des ingénieurs maîtrisant\n Les concepts et outils mathématiques nécessaires à' +
        ' la conception et à la réalisation de systèmes d\'information financiers\n Les outils ' +
        'informatiques pour la mise en œuvre\n Les concepts inhérents à la finance et l’assurance',
    topics: 'Mathématiques appliquées à la finance, Valorisation des données, Programmation parallèle'
  },
  {
    id: 5,
    name: 'Science des Données',
    shorthand: 'SD',
    small_picture: 'https://cdn-images-1.medium.com/max/1600/0*FSm3GZEOmBWA8k-4.jpg',
    big_picture: 'https://cdn-images-1.medium.com/max/1600/0*FSm3GZEOmBWA8k-4.jpg',
    description: 'En termes généraux, la science des données est l\'extraction de connaissance d\'ensembles de données.' +
        ' Elle emploie des techniques et des théories tirées de plusieurs autres domaines plus larges des mathématiques,' +
        ' la statistique principalement, la théorie de l\'information et la technologie de l\'information, notamment le' +
        ' traitement de signal, des modèles probabilistes, l\'apprentissage automatique, l\'apprentissage statistique,' +
        ' la programmation informatique, l\'ingénierie de données, la reconnaissance de formes et l\'apprentissage, ' +
        'la visualisation, l\'analytique prophétique, la modélisation d\'incertitude, le stockage de données, la ' +
        'compression de données et le calcul à haute performance. Les méthodes qui s\'adaptent aux données de masse' +
        ' sont particulièrement intéressantes dans la science des données, bien que la discipline ne soit généralement' +
        ' pas considérée comme limitée à ces données.',
    topics: 'Aéronautique, Assurance, Automobile, Agriculture, Banque'
  }
]);
