import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import LinearProgress from "@mui/material/LinearProgress"
import Grid from "@mui/material/Grid"
import { capitalize } from "../utils/helpers"

function PokemonStats({ stats }) {
  
  const statColors = {
    hp: "#FF5959",
    attack: "#F5AC78",
    defense: "#FAE078",
    "special-attack": "#9DB7F5",
    "special-defense": "#A7DB8D",
    speed: "#FA92B2",
  }

  const statNames = {
    hp: "PV",
    attack: "Attaque",
    defense: "Défense",
    "special-attack": "Attaque Spé.",
    "special-defense": "Défense Spé.",
    speed: "Vitesse",
  }

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Statistiques
      </Typography>
      <Grid container spacing={2}>
        {stats.map((stat) => {
          const statName = stat.stat.name
          const statValue = stat.base_stat
          
          const percentage = (statValue / 255) * 100

          return (
            <Grid item xs={12} sm={6} key={statName}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Typography variant="body2" sx={{ minWidth: 120 }}>
                  {statNames[statName] || capitalize(statName)}
                </Typography>
                <Typography variant="body2" sx={{ ml: 1, minWidth: 30 }}>
                  {statValue}
                </Typography>
                <Box sx={{ width: "100%", ml: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={percentage}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: statColors[statName] || "#777",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default PokemonStats
