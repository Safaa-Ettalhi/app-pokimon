"use client"
import { useParams, useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Chip from "@mui/material/Chip"
import Button from "@mui/material/Button"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import CircularProgress from "@mui/material/CircularProgress"
import Alert from "@mui/material/Alert"
import { fetchPokemonDetails, fetchPokemonSpecies, fetchEvolutionChain } from "../api/pokemonApi"
import PokemonStats from "../components/PokemonStats"
import EvolutionChain from "../components/EvolutionChain"
import { capitalize } from "../utils/helpers"

function PokemonDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    data: pokemon,
    isLoading: isLoadingPokemon,
    isError: isErrorPokemon,
  } = useQuery({
    queryKey: ["pokemonDetails", id],
    queryFn: () => fetchPokemonDetails(id),
    staleTime: Number.POSITIVE_INFINITY,
    retry: 2,
    refetchOnWindowFocus: false,
  })

  const {
    data: species,
    isLoading: isLoadingSpecies,
    isError: isErrorSpecies,
  } = useQuery({
    queryKey: ["pokemonSpecies", id],
    queryFn: () => fetchPokemonSpecies(id),
    staleTime: Number.POSITIVE_INFINITY,
    enabled: !!pokemon, 
    
    retry: 2,
   
    refetchOnWindowFocus: false,
  })


  const { data: evolutionChain, isLoading: isLoadingEvolution } = useQuery({
    queryKey: ["evolutionChain", species?.evolution_chain?.url],
    queryFn: () => fetchEvolutionChain(species.evolution_chain.url),
    staleTime: Number.POSITIVE_INFINITY,
    enabled: !!species?.evolution_chain?.url, 
    retry: 2,
    refetchOnWindowFocus: false,
  })

  const handleBack = () => {
    navigate(-1)
  }

  if (isLoadingPokemon) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "center", my: 8 }}>
          <CircularProgress />
        </Box>
      </Container>
    )
  }

  if (isErrorPokemon || isErrorSpecies) {
    return (
      <Container maxWidth="lg">
        <Alert severity="error" sx={{ my: 4 }}>
          Une erreur est survenue lors du chargement des données du Pokémon.
        </Alert>
        <Button startIcon={<ArrowBackIcon />} onClick={handleBack}>
          Retour
        </Button>
      </Container>
    )
  }


  const imageUrl = pokemon.sprites.other["official-artwork"].front_default || pokemon.sprites.front_default

  const getDescription = () => {
    if (!species) return "Chargement de la description..."

    const frenchFlavorTexts = species.flavor_text_entries.filter((entry) => entry.language.name === "fr")

    return frenchFlavorTexts.length > 0
      ? frenchFlavorTexts[0].flavor_text.replace(/\f/g, " ")
      : "Aucune description disponible en français."
  }

  return (
    <Container maxWidth="lg">
      <Button startIcon={<ArrowBackIcon />} onClick={handleBack} sx={{ mb: 2 }}>
        Retour
      </Button>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Grid container spacing={4}>
            {/* Image et informations de base */}
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src={imageUrl}
                alt={pokemon.name}
                sx={{
                  width: "100%",
                  maxHeight: 300,
                  objectFit: "contain",
                }}
              />
            </Grid>

            <Grid item xs={12} md={8}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
                  {capitalize(pokemon.name)}
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ ml: 2 }}>
                  #{pokemon.id.toString().padStart(3, "0")}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
                {pokemon.types.map((type) => (
                  <Chip
                    key={type.type.name}
                    label={capitalize(type.type.name)}
                    sx={{
                      backgroundColor: `var(--type-${type.type.name})`,
                      color: "white",
                      fontWeight: "bold",
                    }}
                    className={`type-${type.type.name}`}
                  />
                ))}
              </Box>

              <Typography variant="body1" paragraph>
                {isLoadingSpecies ? "Chargement de la description..." : getDescription()}
              </Typography>

              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={6} sm={3}>
                  <Typography variant="body2" color="text.secondary">
                    Taille
                  </Typography>
                  <Typography variant="body1">{pokemon.height / 10} m</Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="body2" color="text.secondary">
                    Poids
                  </Typography>
                  <Typography variant="body1">{pokemon.weight / 10} kg</Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="body2" color="text.secondary">
                    Catégorie
                  </Typography>
                  <Typography variant="body1">
                    {species?.genera?.find((g) => g.language.name === "fr")?.genus || "Inconnu"}
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="body2" color="text.secondary">
                    Capacités
                  </Typography>
                  <Typography variant="body1">
                    {pokemon.abilities.map((ability) => capitalize(ability.ability.name)).join(", ")}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Statistiques */}
          <PokemonStats stats={pokemon.stats} />

          {/* Chaîne d'évolution */}
          {isLoadingEvolution ? (
            <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <EvolutionChain evolutionChain={evolutionChain} />
          )}
        </CardContent>
      </Card>
    </Container>
  )
}

export default PokemonDetailPage
