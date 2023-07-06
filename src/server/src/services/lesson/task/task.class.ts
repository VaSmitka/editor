// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#custom-services
import fs from 'fs'
import type { Id, NullableId, Params, ServiceInterface } from '@feathersjs/feathers'
import type { Application } from '../../../declarations'
import { initialConnection } from '../../../cooperation/initialConnection'
import { shareDBBackend } from '../../../app'
import { commitFiles, getBranchOid } from '../../../cooperation/githubAdapter'
import { GithubFileRequest } from '../../../cooperation/githubGraphQL/types'

type LessenTask = any
type LessenTaskData = { collectionId: string, lessonName: string, userId: string }
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

    return connectionData
  }

  async create(data: LessenTaskData, params?: ServiceParams): Promise<LessenTask>
  // async create(data: LessenTaskData[], params?: ServiceParams): Promise<LessenTask[]>
  async create(
    data: LessenTaskData,
    params?: ServiceParams
  ): Promise<LessenTask | LessenTask[]> {
    const {collectionId, lessonName, userId} = data;
    
    const lessonPath = `/public/studentDirectory/${collectionId}`
    const idParts = collectionId.split('-');
    const neededName = idParts[0] === 'edit' ? 'lector' : `student-${idParts[0]}`;

    const commitMessage = `User with id:${userId} update lesson ${lessonName} with id:${idParts[1]}`;
  
    // branch created when initializated
    const githubBranchOid = await getBranchOid(neededName);

    if (fs.existsSync(`.${lessonPath}`)){
      const filesNames = fs.readdirSync(`.${lessonPath}`);
      
      const files = filesNames.map(fileName => {
        const fileContent = fs.readFileSync(`.${lessonPath}/${fileName}`, 'utf8');

        const gitFile:GithubFileRequest = {
          path: `lesson-${idParts[1]}/${fileName}`,
          contents: Buffer.from(fileContent, 'utf8').toString('base64')
        }

        return gitFile;
      })

      commitFiles(neededName, githubBranchOid!, commitMessage, files);
    }
    
    return {status: 'OK'}
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
