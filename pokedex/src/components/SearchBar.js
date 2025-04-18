"use client"

import { useState } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import SearchIcon from "@mui/icons-material/Search"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Chip from "@mui/material/Chip"
import { useQuery } from "@tanstack/react-query"
import { fetchPokemonTypes } from "../api/pokemonApi"
import { capitalize } from "../utils/helpers"

function SearchBar({ onSearchChange, onTypeChange }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("")

  const { data: typesData, isLoading } = useQuery({
    queryKey: ["pokemonTypes"],
    queryFn: fetchPokemonTypes,
  })

  const handleSearchChange = (event) => {
    const value = event.target.value
    setSearchTerm(value)
    onSearchChange(value)
  }

  const handleTypeChange = (event) => {
    const value = event.target.value
    setSelectedType(value)
    onTypeChange(value)
  }

  return (
    <Box sx={{ mb: 4, display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
      <TextField
        fullWidth
        label="Rechercher un Pokémon"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="type-select-label">Type</InputLabel>
        <Select labelId="type-select-label" value={selectedType} label="Type" onChange={handleTypeChange}>
          <MenuItem value="">
            <em>Tous les types</em>
          </MenuItem>
          {!isLoading &&
            typesData?.results.map((type) => (
              <MenuItem key={type.name} value={type.name}>
                
                <Chip
                  label={capitalize(type.name)}
                  size="small"
                  sx={{
                    backgroundColor: `var(--type-${type.name})`,
                    color: "white", 
                    fontWeight: "bold",
                    "& .MuiChip-label": {
                      
                      color: "white",
                    },
                  }}
                  className={`type-${type.name}`}
                />
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SearchBar
