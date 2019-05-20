const BaseModel = require('./base-model.js');

module.exports = new BaseModel('token', t => {
  t.increments('id').primary();
  t.string('token', 64);
  t.enum('status', ['pending', 'completed', 'blocked']).defaultTo('pending');
  t.timestamp('expires_at');
  t.timestamp('created_at').defaultTo((new Date()).toJSON());
},
[
  {
    id: 0,
    token: '2bccf9ddc365b432438163b74775abce',
    status: 'completed',
    expires_at: '2019-05-20T12:00:27.741Z',
    created_at: '2019-05-20T12:00:27.741Z'
  },
  {
    id: 1,
    token: '2bccf9ddc365b432438163b74705adce',
    status: 'completed',
    expires_at: '2019-05-20T12:00:27.741Z',
    created_at: '2019-05-20T12:00:27.741Z'
  },
  {
    id: 2,
    token: '2bccf9ddc365b432438163b74705abce',
    status: 'completed',
    expires_at: '2019-05-20T12:00:27.741Z',
    created_at: '2019-05-20T12:00:27.741Z'
  }
]);
