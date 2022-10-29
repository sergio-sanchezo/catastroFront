import { configureStore } from '@reduxjs/toolkit'
import predioReducer from './features/predios/prediosSlice'
import propietarioReducer from './features/propietarios/propietariosSlice'
import construccionReducer from './features/construcciones/construccionesSlice'
import terrenoReducer from './features/terrenos/terrenosSlice'

export const store = configureStore({
  reducer: {
    predios: predioReducer,
    propietarios: propietarioReducer,
    construcciones: construccionReducer,
    terrenos: terrenoReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
