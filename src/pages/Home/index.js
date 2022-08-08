import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
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
  {
    title: "Encoders/Decoders",
    components: [
      {
        name: "Base64",
        path: "/encoders/base64",
      },
      {
        name: "Url",
        path: "/encoders/url",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Stack spacing={2}>
        {items &&
          items.map((item, index) => (
            <Paper
              variant="outlined"
              css={css`
                padding: 12px;
                border-radius: 16px;

                :hover {
                  border-color: ${theme.palette.primary.main};
                }
              `}
              key={`${item.title}-${index}`}
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
                      item.components.map((component, indexComponent) => (
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
              </Stack>
            </Paper>
          ))}
      </Stack>
    </>
  );
}
