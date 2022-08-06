import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <div>
      <Typography component="h1" variant="h3">
        App Web di Dev-Helper
      </Typography>
      <hr />
      <Grid container spacing={2}>
        <Grid item>
          <Card>
            <CardActionArea component="a" href="/test">
              <CardContent>Environment Variable Converter</CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
