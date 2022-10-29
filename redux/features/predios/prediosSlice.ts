import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createPredioFn, deletePredioFn, listPrediosFn } from '../../../services/predios'

export interface PredioState {
  list: any[]
}

const initialState: PredioState = {
  list: []
}

export const predioSlice = createSlice({
  name: 'predios',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchAllPredios.fulfilled, (state, action: PayloadAction<any[]>) => {
      state.list = action.payload
    }),
      builder.addCase(createPredio.fulfilled, (state, action: PayloadAction<any>) => {
        state.list.push(action.payload)
      })
  },
  reducers: {}
  // reducers: {
  //   setPrediosList: (state, action: PayloadAction<any[]>) => {
  //     state.list = action.payload
  //   }
  // }
})

// Action creators are generated for each case reducer function
// export const { setPrediosList } = predioSlice.actions

export default predioSlice.reducer

export const fetchAllPredios = createAsyncThunk('predios/listPredios', async () => {
  const data = await listPrediosFn()
  return data
})

export const deletePredio = createAsyncThunk('predios/deletePredio', async (id: string, { dispatch }) => {
  const data = await deletePredioFn(id)
  dispatch(fetchAllPredios())
  return data
})

export const createPredio = createAsyncThunk('predios/createPredio', async (input: any, { dispatch }) => {
  const data = await createPredioFn(input)
  dispatch(fetchAllPredios())
  return data
})
