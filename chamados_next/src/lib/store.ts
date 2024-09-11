import { configureStore } from '@reduxjs/toolkit'
import setorReducer from './slices/setor.slice'


export const makeStore = () => {
  return configureStore({
    reducer: {
      setorState: setorReducer
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']