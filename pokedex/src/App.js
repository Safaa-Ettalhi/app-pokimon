import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import PokemonDetailPage from "./pages/PokemonDetailPage"
import AboutPage from "./pages/AboutPage"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60, 
      cacheTime: 1000 * 60 * 60 * 24, 
      
      retry: 2,
    },
  },
})


const theme = createTheme({
  palette: {
    primary: {
      main: "#EF5350", 
    },
    secondary: {
      main: "#FFCB05", 
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
  },
  components: {
    
    MuiChip: {
      styleOverrides: {
        label: {
          color: "white",
          fontWeight: "bold",
        },
      },
    },
    
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
          },
        },
      },
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
      {/* Outil de développement pour React Query - à supprimer en production */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
