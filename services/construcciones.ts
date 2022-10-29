import { client } from '../graphql/config'
import { listConstrucciones } from '../graphql/construcciones/queries/listConstrucciones'
import { gql } from '@apollo/client'
import { deleteConstruccion } from '../graphql/construcciones/mutations/deleteConstruccion'

export const listConstruccionesFn = async () => {
  try {
    return await (
      await client.query({ query: gql(listConstrucciones) })
    ).data.listConstrucciones
  } catch (error) {
    console.log(error)
  }
}

export const deleteConstruccionFn = async (id: string) => {
  try {
    return await (
      await client.mutate({ mutation: gql(deleteConstruccion), variables: { id } })
    ).data.deleteConstruccion
  } catch (error) {
    console.log(error)
  }
}
