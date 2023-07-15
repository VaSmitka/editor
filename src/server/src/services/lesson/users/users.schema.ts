// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { StringEnum } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../../declarations'
import { dataValidator, queryValidator } from '../../../validators'

import { ExerciseStudentProressEnum } from '../../../utils/consts'
import { passwordHash } from '@feathersjs/authentication-local'

// Main data model schema
export const userHasLessonSchema = Type.Object(
  {
    id: Type.Number(),
    progress: StringEnum(ExerciseStudentProressEnum),
    editable: Type.Number(),
    visibility: Type.Number(),
    student_id: Type.Number(),
    lesson_id: Type.Number()
  },
  { $id: 'UserHasLesson', additionalProperties: false }
)
export type UserHasLesson = Static<typeof userHasLessonSchema>
export const userHasLessonValidator = getValidator(userHasLessonSchema, dataValidator)
export const userHasLessonResolver = resolve<UserHasLesson, HookContext>({})

export const userHasLessonExternalResolver = resolve<UserHasLesson, HookContext>({})

// Schema for creating new entries
export const userHasLessonDataSchemaProperties = Type.Pick(userHasLessonSchema, ['lesson_id'], {
  $id: 'UserHasLessonData',
  additionalProperties: true
})
export const userHasLessonDataSchema = Type.Intersect(
  [
    userHasLessonDataSchemaProperties,
    Type.Object(
      {
        password: Type.String()
      },
      { additionalProperties: true }
    )
  ],
  { additionalProperties: true }
)

export type UserHasLessonData = Static<typeof userHasLessonDataSchema>
export const userHasLessonDataValidator = getValidator(userHasLessonDataSchema, dataValidator)
export const userHasLessonDataResolver = resolve<UserHasLessonData, HookContext>({
  password: passwordHash({ strategy: 'local' })
})

// Schema for updating existing entries
export const userHasLessonPatchSchema = Type.Partial(userHasLessonSchema, {
  $id: 'UserHasLessonPatch'
})
export type UserHasLessonPatch = Static<typeof userHasLessonPatchSchema>
export const userHasLessonPatchValidator = getValidator(userHasLessonPatchSchema, dataValidator)
export const userHasLessonPatchResolver = resolve<UserHasLesson, HookContext>({})

// Schema for allowed query properties
export const userHasLessonQueryProperties = Type.Pick(userHasLessonSchema, [
  'id',
  'progress',
  'student_id',
  'lesson_id'
])
export const userHasLessonQuerySchema = Type.Intersect(
  [
    querySyntax(userHasLessonQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: true })
  ],
  { additionalProperties: false }
)
export type UserHasLessonQuery = Static<typeof userHasLessonQuerySchema>
export const userHasLessonQueryValidator = getValidator(userHasLessonQuerySchema, queryValidator)
export const userHasLessonQueryResolver = resolve<UserHasLessonQuery, HookContext>({})
