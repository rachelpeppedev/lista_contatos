import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <S.Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />

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
          </>
        ) : (
          <S.Campo onClick={() => navigate('/')} as={'button'} type="button">
            Voltar aos contatos
          </S.Campo>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
