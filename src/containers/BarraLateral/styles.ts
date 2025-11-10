import styles, { styled } from 'styled-components'

export const Aside = styles.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`
export const Filtros = styles.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 16px;
`
export const Campo = styled.input`
  font-weight: bold;
  background-color: #fff;
  color: #666666;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid #666666;
  width: 100%;
`
