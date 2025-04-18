const BASE_URL = "https://pokeapi.co/api/v2"

export const fetchPokemonList = async ({ pageParam = 0 }) => {
  const limit = 20
  const offset = pageParam * limit
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`)

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des données")
  }

  return response.json()
}

export const fetchPokemonDetails = async (idOrName) => {
  const response = await fetch(`${BASE_URL}/pokemon/${idOrName}`)

  if (!response.ok) {
    throw new Error(`Erreur lors de la récupération des détails du Pokémon ${idOrName}`)
  }

  return response.json()
}

export const fetchPokemonSpecies = async (id) => {
  const response = await fetch(`${BASE_URL}/pokemon-species/${id}`)

  if (!response.ok) {
    throw new Error(`Erreur lors de la récupération des informations sur l'espèce du Pokémon ${id}`)
  }

  return response.json()
}

export const fetchEvolutionChain = async (url) => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération de la chaîne d'évolution")
  }

  return response.json()
}

export const fetchPokemonTypes = async () => {
  const response = await fetch(`${BASE_URL}/type`)

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des types de Pokémon")
  }

  return response.json()
}
