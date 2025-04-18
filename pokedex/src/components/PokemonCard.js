import { Link as RouterLink } from "react-router-dom"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import { capitalize } from "../utils/helpers"

function PokemonCard({ pokemon, details }) {

  if (!details) {
    return (
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 6,
          },
        }}
        className="pokemon-card"
      >
        <Box sx={{ height: 200, backgroundColor: "#f5f5f5" }} />
        <CardContent>
          <Typography variant="h6" component="div" sx={{ height: 32 }}>
            Chargement...
          </Typography>
        </CardContent>
      </Card>
    )
  }

  const id = details.id

  const imageUrl = details.sprites.other["official-artwork"].front_default || details.sprites.front_default

  return (
    <Card
      component={RouterLink}
      to={`/pokemon/${id}`}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
      className="pokemon-card"
    >
      <CardMedia component="img" height="200" image={imageUrl} alt={pokemon.name} className="pokemon-image" />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{
            mb: 1,
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {capitalize(pokemon.name)}
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "normal" }}>
            #{id.toString().padStart(3, "0")}
          </Typography>
        </Typography>

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {details.types.map((type) => (
            <Chip
              key={type.type.name}
              label={capitalize(type.type.name)}
              size="small"
              sx={{
                backgroundColor: `var(--type-${type.type.name})`,
                color: "white",
              }}
              className={`type-${type.type.name}`}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

export default PokemonCard
