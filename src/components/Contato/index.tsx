import { useState } from 'react'
import * as S from './styles'

type Props = {
  grupo: string
  nome: string
  telefone: string
  email: string
}

const Contato = ({ grupo, nome, telefone, email }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Tag>{grupo}</S.Tag>
      <S.Form>{nome}</S.Form>
      <S.Form>{telefone}</S.Form>
      <S.Form>{email}</S.Form>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Botao>Salvar</S.Botao>
            <S.Botao onClick={() => setEstaEditando(false)}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.Botao>Remover</S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
