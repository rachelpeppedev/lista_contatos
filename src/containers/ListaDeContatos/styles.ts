import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Container = styled.main`
  background-color: ${variaveis.rosa};
  height: 100vh;
  overflow-y: scroll;
`
export const Grid = styled.div`
  padding: 16px;
`
export const Ul = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
`
export const Resultado = styled.p`
  color: #fff;
  margin: 16px;
  font-size: 20px;
  font-weight: medium;
`
