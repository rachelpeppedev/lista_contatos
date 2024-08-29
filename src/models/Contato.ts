import * as enums from '../utils/enums/Contato'

class Contato {
  grupo: enums.Grupo
  nome: string
  telefone: string
  email: string
  id: number

  constructor(
    grupo: enums.Grupo,
    nome: string,
    telefone: string,
    email: string,
    id: number
  ) {
    this.grupo = grupo
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.id = id
  }
}

export default Contato
