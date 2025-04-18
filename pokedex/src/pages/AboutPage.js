"use client"

import { useState } from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Chip from "@mui/material/Chip"
import Avatar from "@mui/material/Avatar"
import Paper from "@mui/material/Paper"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import CodeIcon from "@mui/icons-material/Code"
import InfoIcon from "@mui/icons-material/Info"
import ApiIcon from "@mui/icons-material/Api"
import DataObjectIcon from "@mui/icons-material/DataObject"
import DevicesIcon from "@mui/icons-material/Devices"
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon"
import GitHubIcon from "@mui/icons-material/GitHub"
import WebIcon from "@mui/icons-material/Web"
import StorageIcon from "@mui/icons-material/Storage"
import DesignServicesIcon from "@mui/icons-material/DesignServices"
import SpeedIcon from "@mui/icons-material/Speed"
import SearchIcon from "@mui/icons-material/Search"
import FilterListIcon from "@mui/icons-material/FilterList"
import DeviceHubIcon from "@mui/icons-material/DeviceHub"
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`about-tabpanel-${index}`}
      aria-labelledby={`about-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function AboutPage() {
  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <CatchingPokemonIcon sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
            À propos du Pokédex
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: "auto" }}>
            Une application moderne pour explorer l'univers des Pokémon, développée avec React et l'API PokéAPI
          </Typography>
        </Box>

        <Paper sx={{ mb: 4 }} elevation={3}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="about tabs"
          >
            <Tab icon={<InfoIcon />} label="Présentation" id="about-tab-0" aria-controls="about-tabpanel-0" />
            <Tab icon={<CodeIcon />} label="Technologies" id="about-tab-1" aria-controls="about-tabpanel-1" />
            <Tab icon={<ApiIcon />} label="API" id="about-tab-2" aria-controls="about-tabpanel-2" />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
              Qu'est-ce que ce projet ?
            </Typography>
            <Typography variant="body1" paragraph>
              Ce Pokédex est une application web interactive qui permet aux utilisateurs d'explorer l'univers des
              Pokémon. Développée avec des technologies modernes, elle offre une expérience utilisateur fluide et
              responsive.
            </Typography>

            <Box sx={{ my: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                Fonctionnalités principales
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardContent>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <SearchIcon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="h6">Recherche avancée</Typography>
                      </Box>
                      <Typography variant="body2">
                        Recherchez facilement n'importe quel Pokémon par son nom pour trouver rapidement vos favoris.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardContent>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <FilterListIcon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="h6">Filtrage par type</Typography>
                      </Box>
                      <Typography variant="body2">
                        Filtrez les Pokémon par leur type pour découvrir tous les Pokémon d'un type spécifique.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardContent>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <DeviceHubIcon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="h6">Chaînes d'évolution</Typography>
                      </Box>
                      <Typography variant="body2">
                        Visualisez les chaînes d'évolution complètes pour comprendre comment les Pokémon évoluent.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardContent>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <SpeedIcon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="h6">Statistiques détaillées</Typography>
                      </Box>
                      <Typography variant="body2">
                        Consultez les statistiques détaillées de chaque Pokémon pour comparer leurs forces et
                        faiblesses.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardContent>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <PhoneIphoneIcon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="h6">Design responsive</Typography>
                      </Box>
                      <Typography variant="body2">
                        Profitez d'une expérience optimisée sur tous les appareils, des smartphones aux ordinateurs de
                        bureau.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardContent>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <StorageIcon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="h6">Mise en cache intelligente</Typography>
                      </Box>
                      <Typography variant="body2">
                        Bénéficiez de performances optimales grâce à une mise en cache intelligente des données.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
              Technologies utilisées
            </Typography>
            <Typography variant="body1" paragraph>
              Cette application a été développée en utilisant les technologies modernes suivantes :
            </Typography>

            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12} md={6}>
                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <DataObjectIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6">Frontend</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {/* Correction: Utiliser des couleurs de texte foncées sur fond clair */}
                      <Chip
                        avatar={<Avatar sx={{ color: "#000", bgcolor: "#f5f5f5" }}>R</Avatar>}
                        label="React.js"
                        color="primary"
                        variant="outlined"
                        sx={{ m: 0.5, "& .MuiChip-label": { color: "text.primary" } }}
                      />
                      <Chip
                        avatar={<Avatar sx={{ color: "#000", bgcolor: "#f5f5f5" }}>RQ</Avatar>}
                        label="React Query"
                        color="primary"
                        variant="outlined"
                        sx={{ m: 0.5, "& .MuiChip-label": { color: "text.primary" } }}
                      />
                      <Chip
                        avatar={<Avatar sx={{ color: "#000", bgcolor: "#f5f5f5" }}>RR</Avatar>}
                        label="React Router"
                        color="primary"
                        variant="outlined"
                        sx={{ m: 0.5, "& .MuiChip-label": { color: "text.primary" } }}
                      />
                      <Chip
                        avatar={<Avatar sx={{ color: "#000", bgcolor: "#f5f5f5" }}>MUI</Avatar>}
                        label="Material UI"
                        color="primary"
                        variant="outlined"
                        sx={{ m: 0.5, "& .MuiChip-label": { color: "text.primary" } }}
                      />
                      <Chip
                        avatar={<Avatar sx={{ color: "#000", bgcolor: "#f5f5f5" }}>CSS</Avatar>}
                        label="CSS personnalisé"
                        color="primary"
                        variant="outlined"
                        sx={{ m: 0.5, "& .MuiChip-label": { color: "text.primary" } }}
                      />
                    </Box>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      L'interface utilisateur est construite avec React.js, une bibliothèque JavaScript populaire pour
                      créer des interfaces utilisateur interactives. React Query est utilisé pour la gestion des
                      requêtes API et la mise en cache des données, tandis que React Router gère la navigation entre les
                      différentes pages. Material UI fournit des composants prêts à l'emploi pour un design moderne et
                      cohérent.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <ApiIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6">API et données</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {/* Correction: Utiliser des couleurs de texte foncées sur fond clair */}
                      <Chip
                        avatar={<Avatar sx={{ color: "#000", bgcolor: "#f5f5f5" }}>P</Avatar>}
                        label="PokéAPI"
                        color="secondary"
                        variant="outlined"
                        sx={{ m: 0.5, "& .MuiChip-label": { color: "text.primary" } }}
                      />
                      <Chip
                        avatar={<Avatar sx={{ color: "#000", bgcolor: "#f5f5f5" }}>F</Avatar>}
                        label="Fetch API"
                        color="secondary"
                        variant="outlined"
                        sx={{ m: 0.5, "& .MuiChip-label": { color: "text.primary" } }}
                      />
                      <Chip
                        avatar={<Avatar sx={{ color: "#000", bgcolor: "#f5f5f5" }}>J</Avatar>}
                        label="JSON"
                        color="secondary"
                        variant="outlined"
                        sx={{ m: 0.5, "& .MuiChip-label": { color: "text.primary" } }}
                      />
                    </Box>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      L'application utilise PokéAPI, une API RESTful gratuite et open-source qui fournit des données
                      complètes sur les Pokémon. Les requêtes sont effectuées à l'aide de l'API Fetch native de
                      JavaScript, et les données sont traitées au format JSON.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>

              <Grid item xs={12} md={6}>
                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <DesignServicesIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6">Design et UX</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {/* Correction: Utiliser des couleurs de texte foncées sur fond clair */}
                      <Chip
                        avatar={<Avatar sx={{ color: "#000", bgcolor: "#f5f5f5" }}>R</Avatar>}
                        label="Design Responsive"
                        color="secondary"
                        variant="outlined"
                        sx={{ m: 0.5, "& .MuiChip-label": { color: "text.primary" } }}
                      />
                      <Chip
                        avatar={<Avatar sx={{ color: "#000", bgcolor: "#f5f5f5" }}>MD</Avatar>}
                        label="Material Design"
                        color="secondary"
                        variant="outlined"
                        sx={{ m: 0.5, "& .MuiChip-label": { color: "text.primary" } }}
                      />
                      <Chip
                        avatar={<Avatar sx={{ color: "#000", bgcolor: "#f5f5f5" }}>A</Avatar>}
                        label="Animations CSS"
                        color="secondary"
                        variant="outlined"
                        sx={{ m: 0.5, "& .MuiChip-label": { color: "text.primary" } }}
                      />
                    </Box>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      L'application suit les principes du design responsive pour s'adapter à tous les appareils. Elle
                      utilise les principes du Material Design pour une expérience utilisateur cohérente et intuitive.
                      Des animations CSS subtiles sont utilisées pour améliorer l'interactivité et l'engagement des
                      utilisateurs.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <DevicesIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6">Performance et optimisation</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {/* Correction: Utiliser des couleurs de texte foncées sur fond clair */}
                      <Chip
                        avatar={<Avatar sx={{ color: "#000", bgcolor: "#f5f5f5" }}>LC</Avatar>}
                        label="Lazy Loading"
                        color="primary"
                        variant="outlined"
                        sx={{ m: 0.5, "& .MuiChip-label": { color: "text.primary" } }}
                      />
                      <Chip
                        avatar={<Avatar sx={{ color: "#000", bgcolor: "#f5f5f5" }}>C</Avatar>}
                        label="Mise en cache"
                        color="primary"
                        variant="outlined"
                        sx={{ m: 0.5, "& .MuiChip-label": { color: "text.primary" } }}
                      />
                      <Chip
                        avatar={<Avatar sx={{ color: "#000", bgcolor: "#f5f5f5" }}>P</Avatar>}
                        label="Pagination"
                        color="primary"
                        variant="outlined"
                        sx={{ m: 0.5, "& .MuiChip-label": { color: "text.primary" } }}
                      />
                    </Box>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      L'application utilise des techniques d'optimisation comme le chargement paresseux (lazy loading)
                      pour charger les données à la demande, la mise en cache pour éviter les requêtes redondantes, et
                      la pagination pour gérer efficacement les grandes quantités de données.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={2}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
              À propos de PokéAPI
            </Typography>
            <Typography variant="body1" paragraph>
              PokéAPI est une API RESTful complète qui fournit des données détaillées sur l'univers Pokémon. Cette API
              est gratuite, open-source et ne nécessite pas de clé d'API pour être utilisée.
            </Typography>

            <Box sx={{ my: 3 }}>
              <Card sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                    Caractéristiques de PokéAPI
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                        <StorageIcon color="primary" sx={{ mr: 1, mt: 0.5 }} />
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                            Base de données complète
                          </Typography>
                          <Typography variant="body2">
                            Contient des données sur plus de 900 Pokémon, leurs capacités, types, évolutions et bien
                            plus encore.
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                        <WebIcon color="primary" sx={{ mr: 1, mt: 0.5 }} />
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                            API RESTful
                          </Typography>
                          <Typography variant="body2">
                            Suit les principes RESTful pour une intégration facile avec n'importe quelle application.
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                        <GitHubIcon color="primary" sx={{ mr: 1, mt: 0.5 }} />
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                            Open Source
                          </Typography>
                          <Typography variant="body2">
                            Le code source est disponible sur GitHub, permettant à la communauté de contribuer.
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                        <SpeedIcon color="primary" sx={{ mr: 1, mt: 0.5 }} />
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                            Haute performance
                          </Typography>
                          <Typography variant="body2">
                            Optimisée pour des temps de réponse rapides et une grande disponibilité.
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                Ressources et liens utiles
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {/* Correction: Utiliser des couleurs de texte foncées pour les liens */}
                <Link
                  href="https://pokeapi.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: "flex", alignItems: "center", color: "primary.main" }}
                >
                  <WebIcon sx={{ mr: 1 }} />
                  Site officiel de PokéAPI
                </Link>
                <Link
                  href="https://pokeapi.co/docs/v2"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: "flex", alignItems: "center", color: "primary.main" }}
                >
                  <ApiIcon sx={{ mr: 1 }} />
                  Documentation de l'API
                </Link>
                <Link
                  href="https://github.com/PokeAPI/pokeapi"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: "flex", alignItems: "center", color: "primary.main" }}
                >
                  <GitHubIcon sx={{ mr: 1 }} />
                  Dépôt GitHub
                </Link>
              </Box>
            </Box>
          </TabPanel>
        </Paper>

        <Box sx={{ textAlign: "center", mt: 6, mb: 2 }}>
          <Divider sx={{ mb: 4 }} />
          <Typography variant="body2" color="text.secondary">
            Développé avec <span style={{ color: "#EF5350" }}>❤</span> par un passionné de Pokémon
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            © {new Date().getFullYear()} Pokédex App - Tous droits réservés
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default AboutPage
