import { Card, CardActionArea, CardContent, Grid, Paper } from "@mui/material";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import theme from "../../theme";

export default function ComponentsContainer({ title, components }) {
  return (
    <Paper
      variant="outlined"
      css={css`
        padding: 12px;
        border-radius: 16px;

        :hover {
          border-color: ${theme.palette.primary.main};
        }
      `}
    >
      <Paper
        sx={{
          p: "40px",
          backgroundColor: "whitesmoke",
          borderRadius: "8px",
        }}
      >
        <Grid container spacing={2}>
          {components &&
            components.map((component, indexComponent) => (
              <Grid item key={`${component.name}-${indexComponent}`}>
                <Card>
                  <CardActionArea component="a" href={component.path}>
                    <CardContent>{component.name}</CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Paper>
    </Paper>
  );
}
