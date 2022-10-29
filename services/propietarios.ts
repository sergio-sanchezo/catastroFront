import { gql } from '@apollo/client'
import { client } from '../graphql/config'
import { deletePropietario } from '../graphql/propietarios/mutations/deletePropietario'
import { listPropietariosJuridicos } from '../graphql/propietarios/queries/listPropietariosJuridicos'
import { listPropietariosNaturales } from '../graphql/propietarios/queries/listPropietariosNaturales'

export const listPropietariosNaturalesFn = async () => {
  try {
    return await (
      await client.query({ query: gql(listPropietariosNaturales) })
    ).data.listPropietariosNaturales
  } catch (error) {
    console.log(error)
  }
}

export const listPropietariosJuridicosFn = async () => {
  try {
    return await (
      await client.query({ query: gql(listPropietariosJuridicos) })
    ).data.listPropietariosJuridicos
  } catch (error) {
    console.log(error)
  }
}

export const deletePropietarioFn = async (id: string) => {
  try {
    return await (
      await client.mutate({ mutation: gql(deletePropietario), variables: { id } })
    ).data.deletePropietario
  } catch (error) {
    console.log(error)
  }
}
