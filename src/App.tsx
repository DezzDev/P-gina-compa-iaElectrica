import { ThemeProvider } from "@/components/theme-provider"
import MainPage from "./components/MainPage"
import './App.css'

function App() {
  

  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <MainPage />
    </ThemeProvider>
  )
}

export default App
