import Tarefa from '../../components/Tarefa/index'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar Programação',
    prioridade: 'importante',
    status: 'pendente',
    descricao: 'revisar aulas do módulo 15.'
  },
  {
    titulo: 'Pagar Cartão de crédito',
    prioridade: 'urgente',
    status: 'concluida',
    descricao: 'Salvar nota fiscal.'
  },
  {
    titulo: 'Finalizar Todo List',
    prioridade: 'importante',
    status: 'pendente',
    descricao: 'revisar aulas do módulo 31.'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot; </p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
