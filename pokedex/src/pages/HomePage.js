"use client"

import { useState } from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import SearchBar from "../components/SearchBar"
import PokemonList from "../components/PokemonList"

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("")

  const handleSearchChange = (value) => {
    setSearchTerm(value)
  }

  const handleTypeChange = (value) => {
    setSelectedType(value)
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: "bold", mb: 4 }}>
          Explorez le monde des Pokémon
        </Typography>

        <SearchBar onSearchChange={handleSearchChange} onTypeChange={handleTypeChange} />

        <PokemonList searchTerm={searchTerm} selectedType={selectedType} />
      </Box>
    </Container>
  )
}

export default HomePage
