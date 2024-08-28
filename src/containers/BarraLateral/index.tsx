import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
    </div>
    <S.Filtros>
      <FiltroCard legenda="família" contador={1} />
      <FiltroCard legenda="trabalho" contador={2} />
      <FiltroCard legenda="academia" contador={3} />
      <FiltroCard legenda="todos" contador={4} ativo />
    </S.Filtros>
  </S.Aside>
)

export default BarraLateral
