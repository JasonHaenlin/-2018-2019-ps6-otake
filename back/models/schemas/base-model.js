module.exports = class baseModels {
  constructor(name, schema) {
    if (!name) {
      throw new Error('You must provide a name in constructor of BaseModel');
    }
    if (!schema) {
      throw new Error('You must provide a table creation schema in constructor of BaseModel');
    }
    this.name = name;
    this.schema = schema;
  }

  up(knex) {
    return knex.schema
      .createTable(this.name, this.schema)
      .then(() => console.log(this.name + ' Table created'))
      .catch((e) => {
        console.log('There was an error with the ' + this.name + ' table');
        console.log(e);
      });
  }

  down(knex) {
    return knex.schema
      .dropTable(this.name, this.schema)
      .then(() => console.log(this.name + ' table deleted'))
      .catch((e) => {
        console.log('there was an error deleting ' + this.name + ' table');
        console.log(e);
      });
  }
};
