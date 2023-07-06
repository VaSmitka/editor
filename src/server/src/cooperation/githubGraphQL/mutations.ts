import { gql } from 'graphql-request'

export const createBranchMutation = gql`
    mutation ($input: CreateBranchInput!) {
        createRef(input: $input) {
            clientMutationId
            ref {
                id
                name
            }
        }
    }
`

export const createCommitOnBranchMutation = gql`
    mutation ($input: CreateCommitOnBranchInput!) {
        createCommitOnBranch(input: $input) {
            commit {
                url
            }
        }
    }
`