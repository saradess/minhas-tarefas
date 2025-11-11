import styled from 'styled-components'
import { Props } from '.'
import variaveis from '../../styles/variaveis'

type PropsSemLegendaEContador = Omit<Props, 'legenda' | 'contador'>

export const Card = styled.div<PropsSemLegendaEContador>`
  padding: 8px;
  border: 1px solid
    ${(props) => (props.ativo ? `${variaveis.orange}` : `${variaveis.azul}`)};
  border-radius: 8px;
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) =>
    props.ativo ? `${variaveis.orange}` : `${variaveis.azul}`};
`
export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
