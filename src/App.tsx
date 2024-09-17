import { ThemeProvider } from "@/providers/theme-provider"
import MainPage from "./pages/MainPage"
import './App.css'

function App() {
  

  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <MainPage />
    </ThemeProvider>
  )
}

export default App
