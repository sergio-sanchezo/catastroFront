import { client } from '../graphql/config'
import { listPredios } from '../graphql/predio/queries/listPredios'
import { gql } from '@apollo/client'
import { deletePredio } from '../graphql/predio/mutations/deletePredio'
import { createPredio } from '../graphql/predio/mutations/createPredio'

export const listPrediosFn = async () => {
  try {
    return await (
      await client.query({ query: gql(listPredios) })
    ).data.listPredios
  } catch (error) {
    console.log(error)
  }
}

export const deletePredioFn = async (id: string) => {
  try {
    return await (
      await client.mutate({ mutation: gql(deletePredio), variables: { id } })
    ).data.deletePredio
  } catch (error) {
    console.log(error)
  }
}

export const createPredioFn = async (input: any) => {
  try {
    return await (
      await client.mutate({ mutation: gql(createPredio), variables: { input } })
    ).data.createPredio
  } catch (error) {
    console.log(error)
  }
}
