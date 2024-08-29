import Contato from '../../components/Contato'
import * as S from './styles'

const contatos = [
  {
    grupo: 'Família',
    nome: 'João Silva',
    telefone: '(11) 99999-9999',
    email: 'joaosilva@gmail.com'
  },
  {
    grupo: 'Trabalho',
    nome: 'Maria Luiza',
    telefone: '(11) 99999-9999',
    email: 'marilu@empresa.com'
  },
  {
    grupo: 'Academia',
    nome: 'Ana Paula Santos',
    telefone: '(11) 99999-9999',
    email: 'paulinha@gmail.com'
  },
  {
    grupo: 'Família',
    nome: 'Lucas Souza',
    telefone: '(11) 99999-9999',
    email: 'lukinhas@gmail.com'
  }
]

const ListaDeContatos = () => (
  <S.Container>
    <p>4 Contato(s) Classificados como &quot;Todos&ldquo;</p>
    <S.Grid>
      <S.Ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato
              grupo={c.grupo}
              nome={c.nome}
              telefone={c.telefone}
              email={c.email}
            />
          </li>
        ))}
      </S.Ul>
    </S.Grid>
  </S.Container>
)

export default ListaDeContatos
