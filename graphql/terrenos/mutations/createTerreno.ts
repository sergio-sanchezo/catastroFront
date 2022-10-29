export const createTerreno = /* GraphQL */ `
  mutation Mutation($input: TerrenoInput) {
    createTerreno(input: $input) {
      id
      area
      comercialValue
      nearWaterBodies
      terrainType
      hasBuildings
    }
  }
`
