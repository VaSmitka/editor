import { request, gql } from 'graphql-request'

export const repoInfo = 'R_kgDOJ4D1PA';
export const repoName = 'learning-platorm';
export const repoOwner = 'VaSmitka';

export const getGithubBasics = async () => {
    require('dotenv').config();
    
    const query = gql`
        {
            viewer {
                login
            }
        }
    `

    const requestHeaders = {
        authorization: 'Bearer ' + process.env.GITHUB_TOKEN
    }
 
    const data = await request('https://api.github.com/graphql', query, {}, requestHeaders)

    console.log(data)
}