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
import ComponentHeading from "../../components/ComponentHeading";

import { components } from "../../utils/components";

export default function Home() {
  return (
    <>
      <ComponentHeading
        title="Dev Helper"
        description="A must for developing"
      />
      <Stack spacing={2} sx={{pb: 2}}>
        {components &&
          components.map((item, index) => (
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
                <Typography
                  href={`/${item.path}`}
                  variant="h6"
                  component="a"
                  sx={{ textDecoration: "none" }}
                >
                  {item.title}
                </Typography>
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
                            <CardActionArea
                              component="a"
                              href={`/${item.path}/${component.endpoint}`}
                            >
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
