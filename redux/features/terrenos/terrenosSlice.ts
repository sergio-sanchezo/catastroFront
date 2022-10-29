import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createTerrenoFn, deleteTerrenoFn, listTerrenosFn } from '../../../services/terrenos'

export interface TerrenoState {
  list: any[]
}

const initialState: TerrenoState = {
  list: []
}

export const terrenoSlice = createSlice({
  name: 'terrenos',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchAllterrenos.fulfilled, (state, action: PayloadAction<any[]>) => {
      state.list = action.payload
    }),
      builder.addCase(createTerreno.fulfilled, (state, action: PayloadAction<any>) => {
        state.list.push(action.payload)
      })
  },
  reducers: {}
})

// Action creators are generated for each case reducer function
// export const { setTerrenosList } = terrenoSlice.actions

export default terrenoSlice.reducer

export const fetchAllterrenos = createAsyncThunk('terrenos/listTerrenos', async () => {
  const data = await listTerrenosFn()
  return data
})

export const deleteTerreno = createAsyncThunk('terrenos/deleteTerreno', async (id: string, { dispatch }) => {
  const data = await deleteTerrenoFn(id)
  dispatch(fetchAllterrenos())
  return data
})

export const createTerreno = createAsyncThunk('terrenos/createTerreno', async (input: any, { dispatch }) => {
  const data = await createTerrenoFn(input)
  dispatch(fetchAllterrenos())
  return data
})
