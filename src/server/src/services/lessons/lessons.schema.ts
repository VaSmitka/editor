// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { StringEnum, Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import { ExerciseStatusEnum } from '../../utils/consts'

// Main data model schema
export const lessonsSchema = Type.Object(
  {
    id: Type.Number(),
    name: Type.String(),
    description: Type.String(),
    status: StringEnum(ExerciseStatusEnum),
    task: Type.String(),
    creator: Type.Number(),
    courseId: Type.Number()
  },
  { $id: 'Lessons', additionalProperties: false }
)
export type Lessons = Static<typeof lessonsSchema>
export const lessonsValidator = getValidator(lessonsSchema, dataValidator)
export const lessonsResolver = resolve<Lessons, HookContext>({})

export const lessonsExternalResolver = resolve<Lessons, HookContext>({})

// Schema for creating new entries
export const lessonsDataSchema = Type.Pick(lessonsSchema, ['name', 'description', 'creator', 'courseId'], {
  $id: 'LessonsData'
})
export type LessonsData = Static<typeof lessonsDataSchema>
export const lessonsDataValidator = getValidator(lessonsDataSchema, dataValidator)
export const lessonsDataResolver = resolve<Lessons, HookContext>({})

// Schema for updating existing entries
export const lessonsPatchSchema = Type.Partial(lessonsSchema, {
  $id: 'LessonsPatch'
})
export type LessonsPatch = Static<typeof lessonsPatchSchema>
export const lessonsPatchValidator = getValidator(lessonsPatchSchema, dataValidator)
export const lessonsPatchResolver = resolve<Lessons, HookContext>({})

// Schema for allowed query properties
export const lessonsQueryProperties = Type.Pick(lessonsSchema, ['id', 'name'])
export const lessonsQuerySchema = Type.Intersect(
  [
    querySyntax(lessonsQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: true })
  ],
  { additionalProperties: true }
)
export type LessonsQuery = Static<typeof lessonsQuerySchema>
export const lessonsQueryValidator = getValidator(lessonsQuerySchema, queryValidator)
export const lessonsQueryResolver = resolve<LessonsQuery, HookContext>({})
