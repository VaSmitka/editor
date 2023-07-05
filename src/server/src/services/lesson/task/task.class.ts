// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#custom-services
import type { Id, NullableId, Params, ServiceInterface } from '@feathersjs/feathers'
import type { Application } from '../../../declarations'
import { initialConnection } from '../../../cooperation/initialConnection'
import { shareDBBackend } from '../../../app'

type LessenTask = any
type LessenTaskData = any
type LessenTaskPatch = any
type LessenTaskQuery = any

export type { LessenTask, LessenTaskData, LessenTaskPatch, LessenTaskQuery }

export interface LessenTaskServiceOptions {
  app: Application
}

export interface LessenTaskParams extends Params<LessenTaskQuery> {
  student_id: string
}

// This is a skeleton for a custom service class. Remove or add the methods you need here
export class LessenTaskService<ServiceParams extends LessenTaskParams = LessenTaskParams>
  implements ServiceInterface<LessenTask, LessenTaskData, ServiceParams, LessenTaskPatch>
{
  constructor(public options: LessenTaskServiceOptions) {}

  async find(_params?: ServiceParams): Promise<LessenTask[]> {
    return []
  }

  async get(collectionId: Id, _params?: ServiceParams): Promise<LessenTask> {
    const connectionData = initialConnection(collectionId.toString())

    return { ...connectionData }
  }

  async create(data: LessenTaskData, params?: ServiceParams): Promise<LessenTask>
  async create(data: LessenTaskData[], params?: ServiceParams): Promise<LessenTask[]>
  async create(
    data: LessenTaskData | LessenTaskData[],
    params?: ServiceParams
  ): Promise<LessenTask | LessenTask[]> {
    if (Array.isArray(data)) {
      return Promise.all(data.map((current) => this.create(current, params)))
    }

    return {
      id: 0,
      ...data
    }
  }

  // This method has to be added to the 'methods' option to make it available to clients
  async update(id: NullableId, data: LessenTaskData, _params?: ServiceParams): Promise<LessenTask> {
    return {
      id: 0,
      ...data
    }
  }

  async patch(id: NullableId, data: LessenTaskPatch, _params?: ServiceParams): Promise<LessenTask> {
    return {
      id: 0,
      text: `Fallback for ${id}`,
      ...data
    }
  }

  async remove(id: NullableId, _params?: ServiceParams): Promise<LessenTask> {
    return {
      id: 0,
      text: 'removed'
    }
  }
}

export const getOptions = (app: Application) => {
  return { app }
}
