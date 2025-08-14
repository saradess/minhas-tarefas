import { useSelector } from 'react-redux'
import Tarefa from '../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../store'

const ListaDeTarefa = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.title}>
            <Tarefa
              title={t.title}
              priority={t.priority}
              state={t.state}
              description={t.description}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefa
