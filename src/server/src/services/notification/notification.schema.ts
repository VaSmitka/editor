// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { StringEnum, Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import { NotificationTypes } from '../../utils/consts'

// Main data model schema
export const notificationSchema = Type.Object(
  {
    id: Type.Number(),
    toId: Type.Number(),
    type: StringEnum(NotificationTypes),
    text: Type.String(),
    lesson_id: Type.Optional(Type.Number()),
    created_at: Type.Number(),
  },
  { $id: 'Notification', additionalProperties: false }
)
export type Notification = Static<typeof notificationSchema>
export const notificationValidator = getValidator(notificationSchema, dataValidator)
export const notificationResolver = resolve<Notification, HookContext>({})

export const notificationExternalResolver = resolve<Notification, HookContext>({})

// Schema for creating new entries
export const notificationDataSchema = Type.Pick(notificationSchema, ['toId', 'type', 'lesson_id'], {
  $id: 'NotificationData'
})
export type NotificationData = Static<typeof notificationDataSchema>
export const notificationDataValidator = getValidator(notificationDataSchema, dataValidator)
export const notificationDataResolver = resolve<Notification, HookContext>({})

// Schema for updating existing entries
export const notificationPatchSchema = Type.Partial(notificationSchema, {
  $id: 'NotificationPatch'
})
export type NotificationPatch = Static<typeof notificationPatchSchema>
export const notificationPatchValidator = getValidator(notificationPatchSchema, dataValidator)
export const notificationPatchResolver = resolve<Notification, HookContext>({})

// Schema for allowed query properties
export const notificationQueryProperties = Type.Pick(notificationSchema, ['id', 'toId', 'type'])
export const notificationQuerySchema = Type.Intersect(
  [
    querySyntax(notificationQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type NotificationQuery = Static<typeof notificationQuerySchema>
export const notificationQueryValidator = getValidator(notificationQuerySchema, queryValidator)
export const notificationQueryResolver = resolve<NotificationQuery, HookContext>({})
