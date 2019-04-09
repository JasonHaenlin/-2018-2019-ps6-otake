const BaseModel = require('./base-model');

module.exports = new BaseModel('testimonial', t => {
  t.increments('id').primary();
  t.integer('university_id').references('id').inTable('exchange_university');
  t.integer('major_id').references('id').inTable('major');
  t.string('first_name');
  t.string('last_name');
  t.string('email');
  t.string('nationality');
  t.string('text');
},
[
  {
    id: 0, university_id: 0, major_id: 6,
    first_name: 'Luc', last_name: 'Armel',
    email: 'luc.armel@etu.univ-cotedazur.fr', nationality: 'FR',
    text: 'Pour les inscriptions, tu choisis tes cours en tout début de semestre et tu prépares toi-même ton emploi du temps.' +
        'Une fois inscrit, j’avais 10 heures de cours par semaine, divisées en 5 ou 6 modules, ' +
        'certains étant plus courts que d’autres. Au niveau du choix, on a essayé de tout concentrer le lundi,' +
        ' mardi et mercredi afin d’avoir le reste de la semaine libre. Ce que l’on a réussi à faire !'
  },
  {
    id: 1, university_id: 1, major_id: 6,
    first_name: 'Anass', last_name: 'Hu',
    email: 'anass.hu@etu.univ-cotedazur.fr', nationality: 'MA',
    text: 'Il y a deux mondes, celui des étudiants qui vivent « On-campus » et celui des étudiants qui vivent « Off-campus ».' +
        ' La vie sur le campus (en dehors des heures d’études) se résume souvent à un grand « party » : ' +
        'beaucoup d’alcool, des amis et de la bonne humeur. À noter, les étudiants français (ou internationaux) ' +
        'passent la plupart de leur temps entre eux.'
  },
  {
    id: 2, university_id: 1, major_id: 6,
    first_name: 'Hwoarang', last_name: 'Kazama',
    email: 'hwoarang.kazama@etu.univ-cotedazur.fr', nationality: 'JP',
    text: 'Au niveau de mon emploi du temps, j’ai environ une douzaine d’heures de cours par semaine. A côté de ça, ' +
        'je passe beaucoup de temps au sein d’une association étudiante ECA (Engineering and Computer sciences Association).' +
        'Je rajoute en général une douzaine d’heures de travail personnel pour toujours être à jour avec mes cours. ' +
        'La charge de travail est clairement gérable et laisse la possibilité de faire beaucoup à côté.' +
        'Globalement, je pense qu’il est largement possible de travailler à temps partiel à côté mais ' +
        'beaucoup de gens préfèrent s’impliquer dans la vie étudiante et la vie associative à la place.'
  }
]);
