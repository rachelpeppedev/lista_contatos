import * as S from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}
const FiltroCard = ({ ativo, legenda, contador }: Props) => (
  <S.Card ativo={ativo}>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{legenda}</S.Label>
  </S.Card>
)

export default FiltroCard
