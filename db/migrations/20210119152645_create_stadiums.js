exports.up = function (knex) {
  return knex.schema.createTable('stadiums', (stadiumsTable) => {
    console.log('creating stadiums table');
    stadiumsTable.increments('stadium_id').primary();
    stadiumsTable.string('name').notNullable();
    stadiumsTable.string('city').notNullable();
    stadiumsTable.string('club').notNullable();
    stadiumsTable.integer('capacity').notNullable();
    stadiumsTable.string('postcode').notNullable();
    stadiumsTable.text('description').notNullable();
  });
};

exports.down = function (knex) {
  console.log('removing stadiums table...');
  return knex.schema.dropTable('stadiums');
};
