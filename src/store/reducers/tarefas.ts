import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'estudar JavaScript',
      enums.Priority.MEDIA,
      enums.State.PENDENTE,
      'Descrição da Tarefa',
      1
    ),
    new Tarefa(
      'estudar React',
      enums.Priority.ALTA,
      enums.State.CONCLUIDA,
      'Descrição da Tarefa',
      2
    ),
    new Tarefa(
      'estudar Ingles',
      enums.Priority.BAIXA,
      enums.State.PENDENTE,
      'Descrição da Tarefa',
      3
    )
  ],
  reducers: {
    removerTarefa: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { removerTarefa } = tarefasSlice.actions

export default tarefasSlice.reducer
