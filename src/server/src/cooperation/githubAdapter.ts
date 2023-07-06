import { request } from 'graphql-request'
import { getBranchOidQuery, getRepoFilesQuery } from './githubGraphQL/queries';
import { BranchOidResponse, CommitResponse, CreateBrancheResponse, FilesResponse, GithubFile, GithubFileRequest } from './githubGraphQL/types';
import { createBranchMutation, createCommitOnBranchMutation } from './githubGraphQL/mutations';

export const githubURL = 'https://api.github.com/graphql';
export const repoId = 'R_kgDOJ4D1PA';
export const repoName = 'learning-platorm';
export const repoOwner = 'VaSmitka';

// https://github.com/jasonkuhrt/graphql-request
// https://stackoverflow.com/questions/72836597/how-to-create-new-commit-with-the-github-graphql-api

export const getBranchOid = async (branchName: string): Promise<string> => {
    require('dotenv').config();
    const requestHeaders = {
        authorization: 'Bearer ' + process.env.GITHUB_TOKEN
    }

    const qVariables = {
        repo: repoName, 
        owner: repoOwner, 
        brancheName: branchName
    }
 
    const branchResponse = await request<BranchOidResponse>(githubURL, getBranchOidQuery, qVariables, requestHeaders)
    return branchResponse.repository.refs.nodes[0].target.history.nodes[0].oid
}

/**
 * 
 * @param expression branch_name:folder_name
 * @returns Github files
 */
export const getFilesFromBranchFolder = async (expression:string): Promise<GithubFile[]> => {
    require('dotenv').config();
    const requestHeaders = {
        authorization: 'Bearer ' + process.env.GITHUB_TOKEN
    }

    const qVariables = {
        repo: repoName, 
        owner: repoOwner, 
        brancheName: expression // branch_name:folder_name
    }
 
    const fileResponse = await request<FilesResponse>(githubURL, getRepoFilesQuery, qVariables, requestHeaders)
    return fileResponse.repository.object.entries
}

export const commitFiles = async (branchName: string, oid:string, commitMessage: string, filesForCommit:GithubFileRequest[]): Promise<string> => {
    require('dotenv').config();
    const requestHeaders = {
        authorization: 'Bearer ' + process.env.GITHUB_TOKEN
    }

    const mVariables = {
        input: {
          branch: {
            repositoryNameWithOwner: `${repoOwner}/${repoName}`,
            branchName: branchName
          },
          message: {
            headline: commitMessage
          },
          fileChanges: {
            additions: filesForCommit
          },
          expectedHeadOid: oid
        }
    }

    const commitResponse = await request<CommitResponse>(githubURL, createCommitOnBranchMutation, mVariables, requestHeaders)
    return commitResponse.createCommitOnBranch.commit.url
}

export const createBranch =async (branchName: string, oid:string): Promise<string> => {
    require('dotenv').config();
    const requestHeaders = {
        authorization: 'Bearer ' + process.env.GITHUB_TOKEN
    }

    const mVariables = {
        input:{
            repositoryId: repoId, 
            name: branchName, 
            oid
        }
    }

    const commitResponse = await request<CreateBrancheResponse>(githubURL, createBranchMutation, mVariables, requestHeaders)
    return commitResponse.createRef.ref.id
}