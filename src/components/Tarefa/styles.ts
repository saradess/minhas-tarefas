import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Tarefa'

type TagProps = {
  priority?: enums.Priority
  state?: enums.State
  parametro: 'State' | 'Priority'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'State') {
    if (props.state === enums.State.PENDENTE) return variaveis.amarelo
    if (props.state === enums.State.CONCLUIDA) return variaveis.verde
  } else if (props.parametro === 'Priority') {
    if (props.priority === enums.Priority.ALTA) return variaveis.vermelho
    if (props.priority === enums.Priority.MEDIA) return variaveis.amarelo
    if (props.priority === enums.Priority.BAIXA) return variaveis.verde
  }

  return 'hsla(0, 3%, 53%, 0.99)'
}

export const Container = styled.div`
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 32px;
`
export const Card = styled.div`
  background-color: #fcfcfc;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;
  border-radius: 16px;
`
export const Title = styled.h3`
  font-weight: bold;
  color: #333;
  font-size: 1.5em;
  margin-bottom: 16px;
`
export const Tag = styled.span<TagProps>`
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  font-weight: bold;
  font-size: 10px;
  color: #fff;
  padding: 4px 8px;
  display: inline-block;
  margin-bottom: 8px;
`

export const Description = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', sans-serif;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`
export const BarraAcoes = styled.div`
  display: flex;
  padding-top: 16px;
`
export const Botao = styled.button`
  font-size: 14px;
  font-weight: bold;
  background-color: #2f3640;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
export const BotaoRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
