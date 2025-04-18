export const capitalize = (string) => {
  if (!string) return ""
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const formatPokemonId = (id) => {
  return id.toString().padStart(3, "0")
}

export const getPokemonIdFromUrl = (url) => {
  const parts = url.split("/")
  return parts[parts.length - 2]
}
