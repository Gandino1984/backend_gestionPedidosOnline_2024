import { AppContextProvider } from './context/AppContextProvider.jsx'
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