export type BranchOidResponse = {
    repository: {
        refs: {
        nodes: [
                {
                    name: string,
                    target: {
                        history: {
                            nodes: [
                                {
                                oid: string
                                }
                            ]
                        }
                    }
                }
            ]
        }
    }
}

export type GithubFileRequest = {
    path: string,
    contents: string // base64
}

export type GithubFile = {
    name: string,
    type: string,
    mode: number,
    object: {
        byteSize: number,
        text: string,
        isBinary: boolean
    }
}

export type FilesResponse = {
    repository: {
        object: {
            entries: GithubFile[]
        }
    }
}

export type CommitResponse = {
    createCommitOnBranch: {
        commit: {
            url: string
        }
    }
}

export type CreateBrancheResponse = {
    createRef: {
        clientMutationId: string | null,
        ref: {
            id: string,
            name:  string
        }
    }
}


export type GithubError = {
    type: string,
    path: string[],
    locations: any[],
    message: string
}