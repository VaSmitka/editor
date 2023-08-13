import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.string('role').notNullable()
    table.string('avatar').nullable()

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
    table.string('status').notNullable()
    table.string('task', 3000).nullable()

    table.bigint('creator').notNullable().unsigned().references('users.id')
    table.bigint('course_id').notNullable().unsigned().references('courses.id')

    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'))
  })

  await knex.schema.createTable('course-users', (table) => {
    table.increments('id').primary()
    table.tinyint('editable').notNullable()
    table.tinyint('visibility').notNullable()
    table.bigint('student_id').notNullable().unsigned().references('users.id')
    table.bigint('course_id').notNullable().unsigned().references('courses.id')

    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'))
  })

  await knex.schema.createTable('lesson-users', (table) => {
    table.increments('id').primary()
    table.string('progress').notNullable()
    table.tinyint('editable').notNullable()
    table.tinyint('visibility').notNullable()

    table.bigint('student_id').notNullable().unsigned().references('users.id')
    table.bigint('lesson_id').notNullable().unsigned().references('lessons.id')

    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'))
  })

  await knex.schema.createTable('notification', (table) => {
    table.increments('id').primary()
    table.bigint('toId').notNullable()
    table.string('type').notNullable()
    table.string('text', 1000).nullable()
    table.string('lesson_id').nullable()
    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'))
  })

  await knex.schema.createTable('messages', (table) => {
    table.increments('id').primary()
    table.integer('space_id').notNullable()
    table.string('text', 1000).notNullable()
    table.bigint('author_id').notNullable().unsigned().references('users.id')
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
  await knex.schema.dropTable('notification')
  await knex.schema.dropTable('messages')
}
