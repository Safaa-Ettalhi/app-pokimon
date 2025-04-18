"use client"

import { useState, useEffect } from "react"
import { useInfiniteQuery, useQueries } from "@tanstack/react-query"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress"
import Alert from "@mui/material/Alert"
import { fetchPokemonList, fetchPokemonDetails } from "../api/pokemonApi"
import PokemonCard from "./PokemonCard"

function PokemonList({ searchTerm, selectedType }) {
  
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ["pokemonList"],
    queryFn: ({ pageParam = 0 }) => fetchPokemonList({ pageParam }),
    getNextPageParam: (lastPage) => {
      
      if (lastPage.next) {
        const url = new URL(lastPage.next)
        const offset = url.searchParams.get("offset")
        return offset / 20
      }
      return undefined
    },
    initialPageParam: 0,
  
    staleTime: 1000 * 60 * 60, 
    cacheTime: 1000 * 60 * 60 * 24, 
  })


  const [filteredPokemon, setFilteredPokemon] = useState([])

  const allPokemon = data ? data.pages.flatMap((page) => page.results) : []

  const pokemonQueries = useQueries({
    queries: allPokemon.map((pokemon) => {
      return {
        queryKey: ["pokemonDetails", pokemon.name],
        queryFn: () => fetchPokemonDetails(pokemon.name),
        staleTime: Number.POSITIVE_INFINITY,
        
        retry: 2,
      }
    }),
  })

  const pokemonDetails = pokemonQueries.map((query) => query.data)
  const isLoadingDetails = pokemonQueries.some((query) => query.isLoading)

  useEffect(() => {
    if (allPokemon.length > 0) {
      let filtered = [...allPokemon]

      if (searchTerm) {
        filtered = filtered.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
      }

      if (selectedType && !isLoadingDetails) {
        filtered = filtered.filter((pokemon) => {
          const details = pokemonDetails.find((detail) => detail && detail.name === pokemon.name)
          return details?.types.some((type) => type.type.name === selectedType)
        })
      }

      setFilteredPokemon(filtered)
    }
  }, [allPokemon, searchTerm, selectedType, pokemonDetails, isLoadingDetails])

  if (status === "loading") {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <CircularProgress />
      </Box>
    )
  }

  if (status === "error") {
    return (
      <Alert severity="error" sx={{ my: 2 }}>
        Une erreur est survenue lors du chargement des Pokémon.
      </Alert>
    )
  }

  if (filteredPokemon.length === 0) {
    return (
      <Alert severity="info" sx={{ my: 2 }}>
        Aucun Pokémon ne correspond à votre recherche.
      </Alert>
    )
  }

  return (
    <>
      <Grid container spacing={3}>
        {filteredPokemon.map((pokemon) => {
          
          const details = pokemonDetails.find((detail) => detail && detail.name === pokemon.name)

          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.name}>
              <PokemonCard pokemon={pokemon} details={details} />
            </Grid>
          )
        })}
      </Grid>


      {hasNextPage && !searchTerm && !selectedType && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button variant="contained" onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? "Chargement..." : "Charger plus de Pokémon"}
          </Button>
        </Box>
      )}
    </>
  )
}

export default PokemonList
