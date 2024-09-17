import { ThemeProvider } from "@/providers/theme-provider"
import Home from "./pages/home"
import './App.css'

function App() {
  

  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <Home />
    </ThemeProvider>
  )
}

export default App
