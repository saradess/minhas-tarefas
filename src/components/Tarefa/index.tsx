import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'

type Props = {
  title: string
  priority: enums.Priority
  state: enums.State
  description: string
}

const Tarefa = ({ description, title, priority, state }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parametro="State" state={state}>
        {state}
      </S.Tag>
      <S.Tag parametro="Priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Description value={description} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelar onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoRemover onClick={() => console.log('Excluir tarefa')}>
              Excluir
            </S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
