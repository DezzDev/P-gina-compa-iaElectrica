import { ThemeProvider } from "@/providers/theme-provider"
import Home from "./pages/home/home"
import './App.css'
import Layout from "./pages/layout"

function App() {
  

  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
			<Layout>
      	
				<Home />
				
			</Layout>
    </ThemeProvider>
  )
}

export default App
