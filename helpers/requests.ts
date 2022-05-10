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
