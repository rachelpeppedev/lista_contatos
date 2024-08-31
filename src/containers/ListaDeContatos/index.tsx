import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import * as S from './styles'
import * as enums from '../../utils/enums/Contato'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio } = useSelector((state: RootReducer) => state.filtro)
  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'Família') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.grupo === enums.Grupo.FAMILIA
        )
      } else if (criterio === 'Trabalho') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.grupo === enums.Grupo.TRABALHO
        )
      } else if (criterio === 'Amigos') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.grupo === enums.Grupo.AMIGOS
        )
      }
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtraContatos()

  return (
    <S.Container>
      <S.Resultado>
        {contatos.length} Contato(s) Classificado(s) como {criterio} <br />
        Buscar como:{' '}
        {termo !== undefined && termo.length > 0 ? `"${termo}"` : ''};
      </S.Resultado>
      <S.Grid>
        <S.Ul>
          {contatos.map((c) => (
            <li key={c.nome}>
              <Contato
                id={c.id}
                grupo={c.grupo}
                nome={c.nome}
                telefone={c.telefone}
                email={c.email}
              />
            </li>
          ))}
        </S.Ul>
      </S.Grid>
    </S.Container>
  )
}

export default ListaDeContatos
