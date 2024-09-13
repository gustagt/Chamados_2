import { configureStore } from '@reduxjs/toolkit'
import setorReducer from './slices/setor.slice'
import atendimentoReducer from './slices/atendimento.slice'
import sistemaReducer from './slices/sistema.slice'
import acessoReducer from './slices/acesso.slice'



export const makeStore = () => {
  return configureStore({
    reducer: {
      setorState: setorReducer,
      atendimentoState: atendimentoReducer,
      sistemaState: sistemaReducer,
      acessoState: acessoReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']