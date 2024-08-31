import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'Família' | 'Trabalho' | 'Amigos' | 'todos'
  valor?: enums.Grupo
}
const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarContatos = () => {
    if (criterio === 'todos') return contatos.itens.length
    if (valor === enums.Grupo.FAMILIA) {
      return contatos.itens.filter((item) => item.grupo === enums.Grupo.FAMILIA)
        .length
    } else if (valor === enums.Grupo.TRABALHO) {
      return contatos.itens.filter(
        (item) => item.grupo === enums.Grupo.TRABALHO
      ).length
    } else if (valor === enums.Grupo.AMIGOS) {
      return contatos.itens.filter((item) => item.grupo === enums.Grupo.AMIGOS)
        .length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarContatos()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
