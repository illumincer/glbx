import { Grid } from "@nextui-org/react";
import { Imagecard } from "./imageCard";

export default function SliderMain() {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid fluid>
        <Imagecard />
      </Grid>
    </Grid.Container>
  );
}
