import { Provider } from 'react-redux'
import BarraLateral from './conatiners/BarraLateral'
import ListaDeTarefa from './ListaDetarefa'
import EstiloGlobal, { AppContainer } from './styles/index'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <AppContainer>
        <BarraLateral />
        <ListaDeTarefa />
      </AppContainer>
    </Provider>
  )
}

export default App
