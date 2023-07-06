import fs from 'fs';
import { GithubFile } from './githubGraphQL/types';

export const createNeededFiles = (path:string, files: GithubFile[]) => {
    if (!fs.existsSync(`.${path}`)){
        fs.mkdirSync(`.${path}`);
    }

    files.forEach(file => {
        fs.writeFileSync(`.${path}/${file.name}`, file.object.text)
    })
}