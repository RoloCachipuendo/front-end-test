import React from "react";
import { useStylesGlobal } from "configurations/styles/theme";
import { Grid, Card, CardContent } from "@material-ui/core";

export const CardGeneric = (props) => {
  const classesGlobal = useStylesGlobal();
  return (
    <Grid container justify="center" style={{ width: "100%" }}>
      <Card className={classesGlobal.card}>
        <CardContent>{props.children}</CardContent>
      </Card>
    </Grid>
  );
};
