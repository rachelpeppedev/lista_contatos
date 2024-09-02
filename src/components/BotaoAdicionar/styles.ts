import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const BotaoNovoContato = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin-left: 16px;
  bottom: 40px;
  padding: 8px 24px;
  border-radius: 16px;
  background-color: ${variaveis.rosa};
  color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
`
