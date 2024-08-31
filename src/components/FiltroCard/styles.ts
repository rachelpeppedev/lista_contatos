import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 3px solid ${(props) => (props.ativo ? '#D9D9D9' : '#a91079')};
  background-color: #570a57;
  color: #fff;
  border-radius: 16px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: medium;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
