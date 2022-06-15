import RoutesApp from './Routes'
import { UserContextProvider } from './contexts/ProductsContext'

function App() {
  return (
    <UserContextProvider>
      <RoutesApp/>
    </UserContextProvider>
  );
}

export default App;