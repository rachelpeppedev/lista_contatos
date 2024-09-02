import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar } from '../../styles'
import * as S from './styles'
import * as enums from '../../utils/enums/Contato'

import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [grupo, setGrupo] = useState(enums.Grupo.AMIGOS)
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        grupo,
        nome,
        telefone,
        email
      })
    )
    navigate('/')
  }

  return (
    <S.Container>
      <S.Resultado>Novo contato</S.Resultado>
      <S.Form onSubmit={cadastrarContato}>
        <S.Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome completo"
        />
        <S.Campo
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="text"
          placeholder="(99) 99999-9999"
        />
        <S.Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
          placeholder="modelo@dominio.com.br"
        />
        <S.Opcoes>
          <p>Grupo:</p>
          {Object.values(enums.Grupo).map((grupo) => (
            <S.Opcao key={grupo}>
              <input
                value={grupo}
                name="grupo"
                type="radio"
                onChange={(evento) =>
                  setGrupo(evento.target.value as enums.Grupo)
                }
                id={grupo}
                defaultChecked={grupo === enums.Grupo.FAMILIA}
              />{' '}
              <label htmlFor={grupo}>{grupo}</label>
            </S.Opcao>
          ))}
        </S.Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </S.Form>
    </S.Container>
  )
}

export default Formulario
