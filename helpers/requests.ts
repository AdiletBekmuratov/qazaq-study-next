import { Quiz } from '@/types/Quizzes'
import { Word } from '@/types/Words'
import axios from 'axios'
import { gql, GraphQLClient } from 'graphql-request'

export const getCurrentUser = async (accessToken = '') => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/me?fields=id,first_name,last_name,email,role,avatar`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    const currentUser = res.data
    return currentUser?.data
  } catch (error) {
    console.log('ERROR CUR USER', error)
  }
}

export const updateGeneralInfo = async (data: any, accessToken: string) => {
  try {
    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
      data,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    const currentUser = res.data
    return currentUser?.data
  } catch (error) {
    console.log('ERROR UPD USER', error)
  }
}

export const getAllWords = async (accessToken?: string) => {
  try {
    const graphQLClient = new GraphQLClient(
      `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    const query = gql`
      query GetAllWords {
        words(filter: { status: { _eq: "published" } }) {
          id
          word
          phonetic
          slug
          image {
            id
          }
          categories {
            categories_id {
              name
            }
          }
          meanings {
            meanings_id {
              translation
              definition
              example
              exampleTranslated
              partOfSpeech {
                name
              }
              synonyms {
                words_id {
                  word
                }
              }
              antonyms {
                words_id {
                  word
                }
              }
            }
          }
        }
      }
    `
    const res = await graphQLClient.request(query)
    return res.words as Word[]
  } catch (error) {
    console.log({ error })
  }
}

export const getAllQuizzes = async (accessToken?: string) => {
  try {
    const graphQLClient = new GraphQLClient(
      `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    const query = gql`
      query GetAllQuizzes {
        quizzes(filter: { status: { _eq: "published" } }) {
          id
          title
          description
          slug
          image {
            id
          }
          scores(
            filter: { user: { id: { _eq: "$CURRENT_USER" } } }
            sort: ["-score"]
            limit: 1
          ) {
            score
          }
          minScore
          questions {
            questions_id {
              id
            }
          }
        }
      }
    `
    const res = await graphQLClient.request(query)

    return res.quizzes as Quiz[]
  } catch (error) {
    console.log({ error })
  }
}

export const getQuizById = async (
  variables: { id: number },
  accessToken?: string
) => {
  try {
    const graphQLClient = new GraphQLClient(
      `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    const query = gql`
      query GetQuizById($id: ID!) {
        quizzes_by_id(id: $id) {
          title
          description
          image {
            id
          }
          questions {
            questions_id {
              text
              image {
                id
              }
              options {
                id
                text
              }
            }
          }
        }
      }
    `
    const res = await graphQLClient.request(query, variables)
    return res.quizzes as Quiz[]
  } catch (error) {
    console.log({ error })
  }
}
