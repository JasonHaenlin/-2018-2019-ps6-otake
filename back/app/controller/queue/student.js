const { Student } = require('../../middlewares/orm');
const uuidv1 = require('uuid/v1');

module.exports = {

  insertStudent(student) {
    student.id = uuidv1();
    return Student.query()
      .insert(student);
  },

  getStudent(id) {
    return Student.query()
      .where({ id: id })
      .first();
  }
};
