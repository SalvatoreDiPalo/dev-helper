import { Card, CardActionArea, CardContent, Grid, Paper } from "@mui/material";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import theme from "../../theme";
import ComponentHeading from "../../components/ComponentHeading";

export default function ComponentsContainer({ title, path, components }) {
  return (
    <>
      <ComponentHeading title={title} />
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
                    <CardActionArea component="a" href={`/${path}/${component.endpoint}`}>
                      <CardContent>{component.name}</CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Paper>
      </Paper>
    </>
  );
}
