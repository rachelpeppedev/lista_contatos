import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contato'

type TagProps = {
  grupo?: enums.Grupo
}

function retornaCorDeFundo(props: TagProps): string {
  if ('grupo' in props) {
    if (props.grupo === enums.Grupo.FAMILIA) return variaveis.roxotag
    if (props.grupo === enums.Grupo.TRABALHO) return variaveis.cinzaescuro
    if (props.grupo === enums.Grupo.AMIGOS) return variaveis.laranja
  }
  return variaveis.roxoescuro
}

export const Card = styled.div`
  padding: 16px;
  margin-top: 16px;
  background-color: #d9d9d9;
  border-radius: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  border-radius: 8px;
  background-color: ${(props) => retornaCorDeFundo(props)};
`
export const Form = styled.h3`
  color: #2e0249;
  font-size: 16px;
  padding-top: 16px;
`
export const TelefoneContato = styled.textarea`
  color: #2e0249;
  font-size: 14px;
  line-height: 16px;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const EmailContato = styled.textarea`
  color: #2e0249;
  font-size: 14px;
  line-height: 16px;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid #d9d9d9;
  padding-top: 8px;
`
export const Botao = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  background-color: #2e0249;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
