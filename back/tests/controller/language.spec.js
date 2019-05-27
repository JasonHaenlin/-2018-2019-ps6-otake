require('../../server');
const assert = require('assert');

const { Language } = require('../../app/middlewares/orm');

const getLanguages = () => {
  return Language.query();
};

describe('language controller to database', () => {
  it('should get the list of languages from the database', async () => {
    const res = await getLanguages();
    assert.ok(res.length > 0);
  });
});
