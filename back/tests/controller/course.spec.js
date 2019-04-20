require('../../server');
const assert = require('assert');

const { course } = require('../../app/controller/school');


describe('course controller to database', () => {
  it('should get the list of courses from the database', async () => {
    const res = await course.getCourses();
    assert.ok(res.length > 0);
  });

  it('should get a list of courses of a specified major from the database', async () => {
    const r = await course.getCoursesOf('SI');
    assert.ok(r.length > 0);
  });

  it('should get a list of courses of a specified major for a specified semester from the database', async () => {
    const r = await course.getCoursesOfMajorForThisSemester('SI', 'S8');
    assert.ok(r.length > 0);
  });
});
