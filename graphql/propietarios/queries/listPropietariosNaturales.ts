export const listPropietariosNaturales = /* GraphQL */ `
  query listPropietariosNaturales {
    listPropietariosNaturales {
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
