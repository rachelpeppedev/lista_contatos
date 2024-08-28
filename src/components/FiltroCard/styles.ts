import styled from 'styled-components'

import { Props } from '.'

type PropsSemLegendaEContador = Omit<Props, 'legenda' | 'contador'>

export const Card = styled.div<PropsSemLegendaEContador>`
  padding: 8px;
  border: 3px solid ${(props) => (props.ativo ? '#D9D9D9' : '#a91079')};
  background-color: #570a57;
  color: #fff;
  border-radius: 16px;
`

export const Contador = styled.span`
  font-weight: medium;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
