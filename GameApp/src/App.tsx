import {Grid, GridItem} from "@chakra-ui/react"
import { NavBar } from "./components/ui/NavBar"
import GameGrid from "./components/ui/GameGrid"

function App() {
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}
  >
    <GridItem area="nav">
      <NavBar />
    </GridItem>
    <GridItem area="aside" >
      Aside
    </GridItem>
    <GridItem area="main">
      <GameGrid />
    </GridItem>
  </Grid>
}
export { App }