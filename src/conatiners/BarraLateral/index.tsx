import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <S.Campo type="text" placeholder="Buscar tarefa..." />
    <S.Filtros>
      <FiltroCard legenda="Pendentes" contador={3} />
      <FiltroCard legenda="Concluídas" contador={5} />
      <FiltroCard legenda="Amanhã" contador={8} />
      <FiltroCard legenda="Importantes" contador={2} />
      <FiltroCard legenda="Hoje" contador={1} />
      <FiltroCard legenda="Todas" ativo contador={19} />
    </S.Filtros>
  </S.Aside>
)

export default BarraLateral
