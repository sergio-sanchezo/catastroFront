import { client } from '../graphql/config'
import { listTerrenos } from '../graphql/terrenos/queries/listTerrenos'
import { gql } from '@apollo/client'
import { deleteTerreno } from '../graphql/terrenos/mutations/deleteTerreno'
import { createTerreno } from '../graphql/terrenos/mutations/createTerreno'

export const listTerrenosFn = async () => {
  try {
    return await (
      await client.query({ query: gql(listTerrenos) })
    ).data.listTerrenos
  } catch (error) {
    console.log(error)
  }
}

export const deleteTerrenoFn = async (id: string) => {
  try {
    return await (
      await client.mutate({ mutation: gql(deleteTerreno), variables: { id } })
    ).data.deleteTerreno
  } catch (error) {
    console.log(error)
  }
}

export const createTerrenoFn = async (input: any) => {
  try {
    return await (
      await client.mutate({ mutation: gql(createTerreno), variables: { input } })
    ).data.createTerreno
  } catch (error) {
    console.log(error)
  }
}
