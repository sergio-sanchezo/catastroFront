import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { deletePropietarioFn, listPropietariosJuridicosFn, listPropietariosNaturalesFn } from '../../../services/propietarios'

export interface PropietarioState {
  listJuridicos: any[]
  listNaturales: any[]
  loading: boolean
}

const initialState: PropietarioState = {
  listJuridicos: [],
  listNaturales: [],
  loading: false
}

export const propietarioSlice = createSlice({
  name: 'propietarios',
  initialState,
  reducers: {
    // setPrediosListJuridicos: (state, action: PayloadAction<any[]>) => {
    //   state.listJuridicos = action.payload
    // },
    setPrediosListNaturales: (state, action: PayloadAction<any[]>) => {
      state.listNaturales = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchAllPropietariosJuridicos.fulfilled, (state, action: PayloadAction<any[]>) => {
      state.listJuridicos = action.payload
    })

    builder.addCase(fetchAllPropietariosNaturales.fulfilled, (state, action: PayloadAction<any[]>) => {
      state.listNaturales = action.payload
    })

    builder.addCase(deletePropietario.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = !action.payload
    })
  }
})

export default propietarioSlice.reducer

export const fetchAllPropietariosJuridicos = createAsyncThunk('propietarios/listJuridicos', async () => {
  const data = await listPropietariosJuridicosFn()
  return data
})

export const fetchAllPropietariosNaturales = createAsyncThunk('propietarios/listNaturales', async () => {
  const data = await listPropietariosNaturalesFn()

  return data
})

export const deletePropietario = createAsyncThunk('propietarios/deletePropietario', async (id: string, { dispatch }) => {
  const data = await deletePropietarioFn(id)
  dispatch(fetchAllPropietariosJuridicos())
  dispatch(fetchAllPropietariosNaturales())
  return data
})
