export const listPropietariosJuridicos = /* GraphQL */ `
  query listPropietariosJuridicos {
    listPropietariosJuridicos {
      id
      address
      phone
      email
      type
      docType
      docNum
      name
      nit
      businessName
      predios {
        id
      }
    }
  }
`
