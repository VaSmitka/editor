import fs from 'fs';

export const expectedTaskFiles = ['index.html', 'style.css', 'index.js'] 


export const checkFilesOnPath = (path:string):string[] => {
    return expectedTaskFiles.filter(fileName => !fs.existsSync(`${path}/${fileName}`));
}

export const createNeededFiles = (path:string) => {
    const filesToCreate = checkFilesOnPath(path);

    if (!fs.existsSync(`.${path}`)){
        fs.mkdirSync(`.${path}`);
    }

    filesToCreate.forEach(fileName => {
        fs.writeFileSync(`.${path}/${fileName}`, '')
    })
}