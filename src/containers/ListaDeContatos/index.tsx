import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import * as S from './styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)

  return (
    <S.Container>
      <p>4 Contato(s) Classificados como &quot;Todos&ldquo;</p>
      <S.Grid>
        <S.Ul>
          {contatos.map((c) => (
            <li key={c.nome}>
              <Contato
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
