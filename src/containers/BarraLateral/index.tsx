import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
      </div>
      <S.Filtros>
        <FiltroCard
          valor={enums.Grupo.FAMILIA}
          criterio="Família"
          legenda="família"
        />
        <FiltroCard
          valor={enums.Grupo.TRABALHO}
          criterio="Trabalho"
          legenda="trabalho"
        />
        <FiltroCard
          valor={enums.Grupo.AMIGOS}
          criterio="Amigos"
          legenda="amigos"
        />
        <FiltroCard criterio="todos" legenda="todos" />
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
