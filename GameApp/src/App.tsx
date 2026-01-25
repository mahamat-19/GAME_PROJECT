import {Grid, GridItem} from "@chakra-ui/react"

function App() {
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}
  >
    <GridItem area="nav" bg="coral">
      Nav
    </GridItem>
    <GridItem area="aside" bg="lightblue">
      Aside
    </GridItem>
    <GridItem area="main" bg="lightgreen">
      Main
    </GridItem>
  </Grid>
}
export { App }