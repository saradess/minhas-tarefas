import * as enums from '../utils/enums/Tarefa'

class Tarefa {
  title: string
  priority: enums.Priority
  state: enums.State
  description: string
  id: number

  constructor(
    title: string,
    priority: enums.Priority,
    state: enums.State,
    description: string,
    id: number
  ) {
    this.title = title
    this.priority = priority
    this.state = state
    this.description = description
    this.id = id
  }
}

export default Tarefa
