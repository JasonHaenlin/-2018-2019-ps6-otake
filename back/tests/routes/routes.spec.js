const { app } = require('../../server');
const request = require('supertest');
const assert = require('assert');

describe('status route', () => {
  describe('GET /', () => {
    it('should respond with a 200', () => {
      request(app)
        .get('/status/')
        .expect(200)
        .end((err) => {
          if (err) {
            throw err;
          }
        });
    });
  });

  describe('GET /', () => {
    it('should respond with a 200 and receive a response', () => {
      request(app)
        .get('/status/')
        .expect('content-type', /json/)
        .expect(200)
        .expect((res) => {
          assert.notEqual(res.body, null);
          assert.equal(res.body, 'ok');
        })
        .end((err) => {
          if (err) {
            throw err;
          }
        });
    });

    it('should respond with a 404 error', () => {
      request(app)
        .get('/tickets/nopath')
        .expect(404)
        .end((err) => {
          if (err) {
            throw err;
          }
        });
    });
  });
});
