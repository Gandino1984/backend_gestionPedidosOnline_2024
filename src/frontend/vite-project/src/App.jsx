import { AppContextProvider } from './AppContext'
import './App.css'
import LoginRegisterForm from './components/landing_page/LoginRegisterForm'
function App() {
  return (
    <AppContextProvider>
      <LoginRegisterForm />
    </AppContextProvider>
  )
}

export default App