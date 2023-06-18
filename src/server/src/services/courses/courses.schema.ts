// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const coursesSchema = Type.Object(
  {
    id: Type.Number(),
    name: Type.String(),
    description: Type.String(),
    creator: Type.Number()
  },
  { $id: 'Courses', additionalProperties: false }
)
export type Courses = Static<typeof coursesSchema>
export const coursesValidator = getValidator(coursesSchema, dataValidator)
export const coursesResolver = resolve<Courses, HookContext>({})

export const coursesExternalResolver = resolve<Courses, HookContext>({})

// Schema for creating new entries
export const coursesDataSchema = Type.Pick(coursesSchema, ['name', 'description', 'creator'], {
  $id: 'CoursesData'
})
export type CoursesData = Static<typeof coursesDataSchema>
export const coursesDataValidator = getValidator(coursesDataSchema, dataValidator)
export const coursesDataResolver = resolve<Courses, HookContext>({})

// Schema for updating existing entries
export const coursesPatchSchema = Type.Partial(coursesSchema, {
  $id: 'CoursesPatch'
})
export type CoursesPatch = Static<typeof coursesPatchSchema>
export const coursesPatchValidator = getValidator(coursesPatchSchema, dataValidator)
export const coursesPatchResolver = resolve<Courses, HookContext>({})

// Schema for allowed query properties
export const coursesQueryProperties = Type.Pick(coursesSchema, ['id', 'name'])
export const coursesQuerySchema = Type.Intersect(
  [
    querySyntax(coursesQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type CoursesQuery = Static<typeof coursesQuerySchema>
export const coursesQueryValidator = getValidator(coursesQuerySchema, queryValidator)
export const coursesQueryResolver = resolve<CoursesQuery, HookContext>({})
