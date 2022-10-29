export const createPredio = /* GraphQL */ `
  mutation Mutation($input: PredioInput) {
    createPredio(input: $input) {
      id
      numberIdentifier
      value
      name
      department
      municipality
      Propietarios {
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
      }
      Construcciones {
        id
        floorsNumber
        area
        buildingType
        address
      }
      Terreno {
        id
        area
        comercialValue
        nearWaterBodies
        terrainType
        hasBuildings
      }
    }
  }
`
