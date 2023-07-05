import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('firstName')
    table.string('lastName')
    table.string('email').unique()
    table.string('password')
    table.string('role')

    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'))
  })

  await knex.schema.createTable('courses', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('description').notNullable()

    table.bigint('creator').notNullable().references('users.id')
    table.bigint('template').references('courses.id')

    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'))
  })

  await knex.schema.createTable('lessons', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('description').notNullable()

    table.bigint('creator').notNullable().unsigned().references('users.id')
    table.bigint('course_id').notNullable().unsigned().references('courses.id')

    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'))
  })

  await knex.schema.createTable('course-users', (table) => {
    table.increments('id').primary()
    table.string('status').notNullable()

    table.bigint('student_id').notNullable().unsigned().references('users.id')
    table.bigint('course_id').notNullable().unsigned().references('courses.id')

    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'))
  })

  await knex.schema.createTable('lesson-users', (table) => {
    table.increments('id').primary()
    table.string('status').notNullable()

    table.bigint('student_id').notNullable().unsigned().references('users.id')
    table.bigint('lesson_id').notNullable().unsigned().references('lessons.id')

    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'))
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('lessons')
  await knex.schema.dropTable('courses')
  await knex.schema.dropTable('users')
  await knex.schema.dropTable('course-users')
  await knex.schema.dropTable('lesson-users')
}
