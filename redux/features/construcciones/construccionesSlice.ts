import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { listPrediosFn } from '../../../services/predios'
import { deleteConstruccionFn, listConstruccionesFn } from '../../../services/construcciones'

export interface ConstruccionesState {
  list: any[]
}

const initialState: ConstruccionesState = {
  list: []
}

export const construccionSlice = createSlice({
  name: 'construcciones',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchAllConstrucciones.fulfilled, (state, action: PayloadAction<any[]>) => {
      state.list = action.payload
    })
  },
  reducers: {
    // setConstruccionesList: (state, action: PayloadAction<any[]>) => {
    //   state.list = action.payload
    // }
  }
})

// Action creators are generated for each case reducer function
// export const { setConstruccionesList } = construccionSlice.actions

export default construccionSlice.reducer

export const fetchAllConstrucciones = createAsyncThunk('construcciones/listConstrucciones', async () => {
  const data = await listConstruccionesFn()
  return data
})

export const deleteConstruccion = createAsyncThunk('construcciones/deleteConstruccion', async (id: string, { dispatch }) => {
  const data = await deleteConstruccionFn(id)
  dispatch(fetchAllConstrucciones())
  return data
})
