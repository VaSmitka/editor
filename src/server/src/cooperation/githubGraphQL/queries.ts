import { gql } from 'graphql-request'

export const getBranchOidQuery = gql`
    query getBranchOid($repo: String!, $owner: String!, $brancheName: String!) {
        repository(name:$repo, owner:$owner) {
        refs(refPrefix: "refs/heads/", query:$brancheName, first:2) {
        nodes {
            name
            target {
            ... on Commit {
                history(first: 1) {
                nodes {
                    oid
                }
                }
            }
            }
        }
        }
    }
    }
`

export const getRepoFilesQuery = gql`
    query getRepoFiles($owner: String!, $name: String!, $expression: String!) {
        repository(owner: $owner, name: $name) {
            object(expression: $expression) {
                ... on Tree {
                    entries {
                        name
                        type
                        mode
                        
                        object {
                            ... on Blob {
                                byteSize
                                text
                                isBinary
                            }
                        }
                    }
                }
            }
        }
    }
`
