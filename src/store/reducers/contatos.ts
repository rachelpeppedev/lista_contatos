import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato(
      enums.Grupo.FAMILIA,
      'João Silva',
      '(11) 99999-9999',
      'joaosilva@gmail.com',
      1
    ),
    new Contato(
      enums.Grupo.TRABALHO,
      'Maria Luiza',
      '(11) 99999-9999',
      'marilu@empresa.com',
      2
    ),
    new Contato(
      enums.Grupo.AMIGOS,
      'Ana Paula Santos',
      '(11) 99999-9999',
      'paulinha@gmail.com',
      3
    ),
    new Contato(
      enums.Grupo.FAMILIA,
      'Lucas Souza',
      '(11) 99999-9999',
      'lukinhas@gmail.com',
      4
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions

export default contatosSlice.reducer
