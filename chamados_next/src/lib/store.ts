import { configureStore } from '@reduxjs/toolkit'
import setorReducer from './slices/setor.slice'
import atendimentoReducer from './slices/atendimento.slice'
import sistemaReducer from './slices/sistema.slice'
import acessoReducer from './slices/acesso.slice'
import chamadoReducer from './slices/chamado.slice'
import origemReducer from './slices/origem.slice';
import statusReducer from './slices/status.slice';
import tiposContratacoesReducer from './slices/tiposContratacoes.slice'
import userReducer from './slices/user.slice'



export const makeStore = () => {
  return configureStore({
    reducer: {
      setorState: setorReducer,
      atendimentoState: atendimentoReducer,
      sistemaState: sistemaReducer,
      acessoState: acessoReducer,
      chamadoState: chamadoReducer,
      origemState: origemReducer,
      statusState: statusReducer,
      tiposContratacoesState: tiposContratacoesReducer,
      userState: userReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']