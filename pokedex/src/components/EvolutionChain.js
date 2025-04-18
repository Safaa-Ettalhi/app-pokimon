import React from "react"
import { useQuery } from "@tanstack/react-query"
import { Link as RouterLink } from "react-router-dom"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CircularProgress from "@mui/material/CircularProgress"
import Alert from "@mui/material/Alert"
import { fetchPokemonDetails } from "../api/pokemonApi"
import { capitalize } from "../utils/helpers"

const getPokemonIdFromUrl = (url) => {
  const parts = url.split("/")
  return parts[parts.length - 2]
}


function EvolutionPokemon({ pokemonName }) {
 
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemonDetails", pokemonName],
    queryFn: () => fetchPokemonDetails(pokemonName),
    staleTime: Number.POSITIVE_INFINITY,
    
    retry: 2,
  })

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
        <CircularProgress size={40} />
      </Box>
    )
  }

  if (isError) {
    return (
      <Alert severity="error" sx={{ m: 1 }}>
        Erreur de chargement
      </Alert>
    )
  }

  const imageUrl = data.sprites.other["official-artwork"].front_default || data.sprites.front_default

  return (
    <Card
      component={RouterLink}
      to={`/pokemon/${data.id}`}
      sx={{
        width: 120,
        textDecoration: "none",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 3,
        },
      }}
    >
      <CardMedia component="img" height="120" image={imageUrl} alt={data.name} />
      <CardContent sx={{ p: 1, textAlign: "center" }}>
        <Typography variant="body2" noWrap>
          {capitalize(data.name)}
        </Typography>
      </CardContent>
    </Card>
  )
}


function buildEvolutionChain(chain, result = []) {
  const pokemonId = getPokemonIdFromUrl(chain.species.url)


  if (result.length === 0) {
    result.push([{ name: chain.species.name, id: pokemonId }])
  }

 
  if (chain.evolves_to && chain.evolves_to.length > 0) {
    const evolutions = chain.evolves_to.map((evolution) => ({
      name: evolution.species.name,
      id: getPokemonIdFromUrl(evolution.species.url),
      min_level: evolution.evolution_details[0]?.min_level,
      trigger: evolution.evolution_details[0]?.trigger?.name,
      item: evolution.evolution_details[0]?.item?.name,
    }))

    result.push(evolutions)

   
    chain.evolves_to.forEach((evolution) => {
      buildEvolutionChain(evolution, result)
    })
  }

  return result
}


function EvolutionChain({ evolutionChain }) {
  if (!evolutionChain) {
    return null
  }


  const evolutionStages = buildEvolutionChain(evolutionChain.chain)

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Évolutions
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {evolutionStages.map((stage, stageIndex) => (
          <React.Fragment key={stageIndex}>
        
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {stage.map((pokemon) => (
                <EvolutionPokemon key={pokemon.name} pokemonName={pokemon.name} />
              ))}
            </Box>

           
            {stageIndex < evolutionStages.length - 1 && <ArrowForwardIcon sx={{ mx: 2 }} />}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  )
}

export default EvolutionChain
