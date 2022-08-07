import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Box,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import theme from "../../theme";

const items = [
  {
    title: "Converters",
    components: [
      {
        name: "Spring Properties Converter",
        path: "/converters/spring-properties",
      },
    ],
  },
  {
    title: "Generators",
    components: [
      {
        name: "UUID Generator",
        path: "/generators/uuid",
      },
    ],
  },
];

export default function Home() {
  return (
    <div>
      <Box
        textAlign={"center"}
        px={{ xs: 2, sm: 0 }}
        pb={{ xs: "2rem", sm: "3rem", md: "4rem" }}
      >
        <h1>Dev Helper</h1>
        <Typography variant="caption" color="secondary">
          A must for developing
        </Typography>
      </Box>

      <Stack spacing={2}>
        {items &&
          items.map((item) => (
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
              <Stack spacing={2}>
                <Typography variant="h6">{item.title}</Typography>
                <Paper
                  sx={{
                    p: "40px",
                    backgroundColor: "whitesmoke",
                    borderRadius: "8px",
                  }}
                >
                  <Grid container spacing={2}>
                    {item.components &&
                      item.components.map((component) => (
                        <Grid item>
                          <Card>
                            <CardActionArea component="a" href={component.path}>
                              <CardContent>{component.name}</CardContent>
                            </CardActionArea>
                          </Card>
                        </Grid>
                      ))}
                  </Grid>
                </Paper>
              </Stack>
            </Paper>
          ))}
      </Stack>
    </div>
  );
}
