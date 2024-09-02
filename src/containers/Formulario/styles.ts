import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Container = styled.main`
  background-color: ${variaveis.rosa};
  height: 100vh;
  overflow-y: scroll;
`

export const Resultado = styled.p`
  color: #fff;
  margin: 16px;
  font-size: 20px;
  font-weight: medium;
`
export const Form = styled.form`
  margin: 16px;
`

export const Campo = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  background-color: #fff;
  color: ${variaveis.roxoescuro};
  border-radius: 8px;
  font-weight: bold;
  max-width: 620px;
  width: 100%;
  border: 2px solid ${variaveis.roxoescuro};
`
export const Opcoes = styled.div`
  color: #fff;
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
