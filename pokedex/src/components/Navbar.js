import { Link as RouterLink } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon"

function Navbar() {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Container maxWidth="lg">
        <Toolbar>
          <CatchingPokemonIcon sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: "white",
              textDecoration: "none",
            }}
          >
            Pokédex
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button component={RouterLink} to="/" color="inherit">
            Accueil
          </Button>
          <Button component={RouterLink} to="/about" color="inherit">
            À propos
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
