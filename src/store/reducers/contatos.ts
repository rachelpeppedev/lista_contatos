import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      grupo: enums.Grupo.FAMILIA,
      nome: 'João Silva',
      telefone: '(11) 99999-9999',
      email: 'joaosilva@gmail.com'
    },
    {
      id: 2,
      grupo: enums.Grupo.TRABALHO,
      nome: 'Maria Luiza',
      telefone: '(11) 99999-9999',
      email: 'marilu@empresa.com'
    },
    {
      id: 3,
      grupo: enums.Grupo.AMIGOS,
      nome: 'Ana Paula Santos',
      telefone: '(11) 99999-9999',
      email: 'paulinha@gmail.com'
    },
    {
      id: 4,
      grupo: enums.Grupo.FAMILIA,
      nome: 'Lucas Souza',
      telefone: '(11) 99999-9999',
      email: 'lukinhas@gmail.com'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
