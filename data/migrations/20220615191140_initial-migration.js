/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', tbl => {
        tbl.increments()
    })
    .createTable('ingredients', tbl => {
        tbl.increments()
    })
    .createTable('steps', tbl => {
        tbl.increments()
    })
    .createTable('step_ingredients', tbl => {
        tbl.increments()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
