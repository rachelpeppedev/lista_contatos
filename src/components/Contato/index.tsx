import { useState } from 'react'
import * as S from './styles'

import * as enums from '../../utils/enums/Contato'

type Props = {
  grupo: enums.Grupo
  nome: string
  telefone: string
  email: string
}

const Contato = ({ grupo, nome, telefone, email }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Tag grupo={grupo}>{grupo}</S.Tag>
      <S.Form>{nome}</S.Form>
      <S.Form>{telefone}</S.Form>
      <S.Form>{email}</S.Form>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
