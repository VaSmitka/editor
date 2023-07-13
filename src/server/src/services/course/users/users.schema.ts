// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { StringEnum } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../../declarations'
import { dataValidator, queryValidator } from '../../../validators'

import { passwordHash } from '@feathersjs/authentication-local'

// Main data model schema
export const userHasCourseSchema = Type.Object(
  {
    id: Type.Number(),
    student_id: Type.Number(),
    course_id: Type.Number()
  },
  { $id: 'UserHasCourse', additionalProperties: false }
)
export type UserHasCourse = Static<typeof userHasCourseSchema>
export const userHasCourseValidator = getValidator(userHasCourseSchema, dataValidator)
export const userHasCourseResolver = resolve<UserHasCourse, HookContext>({})

export const userHasCourseExternalResolver = resolve<UserHasCourse, HookContext>({})

// Schema for creating new entries
export const userHasCourseDataSchemaProperties = Type.Pick(userHasCourseSchema, ['course_id'], {
  $id: 'UserHasCourseData',
  additionalProperties: true
})
export const userHasCourseDataSchema = Type.Intersect(
  [
    userHasCourseDataSchemaProperties,
    Type.Object(
      {
        password: Type.String()
      },
      { additionalProperties: true }
    )
  ],
  { additionalProperties: true }
)

export type UserHasCourseData = Static<typeof userHasCourseDataSchema>
export const userHasCourseDataValidator = getValidator(userHasCourseDataSchema, dataValidator)
export const userHasCourseDataResolver = resolve<UserHasCourseData, HookContext>({
  password: passwordHash({ strategy: 'local' })
})

// Schema for updating existing entries
export const userHasCoursePatchSchema = Type.Partial(userHasCourseSchema, {
  $id: 'UserHasCoursePatch'
})
export type UserHasCoursePatch = Static<typeof userHasCoursePatchSchema>
export const userHasCoursePatchValidator = getValidator(userHasCoursePatchSchema, dataValidator)
export const userHasCoursePatchResolver = resolve<UserHasCourse, HookContext>({})

// Schema for allowed query properties
export const userHasCourseQueryProperties = Type.Pick(userHasCourseSchema, [
  'id',
  'student_id',
  'course_id'
])
export const userHasCourseQuerySchema = Type.Intersect(
  [
    querySyntax(userHasCourseQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: true }
)
export type UserHasCourseQuery = Static<typeof userHasCourseQuerySchema>
export const userHasCourseQueryValidator = getValidator(userHasCourseQuerySchema, queryValidator)
export const userHasCourseQueryResolver = resolve<UserHasCourseQuery, HookContext>({})
