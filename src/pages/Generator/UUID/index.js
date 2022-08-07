import React, { useMemo, useState } from "react";
import {
  Paper,
  Box,
  IconButton,
  ToggleButtonGroup,
  ToggleButton,
  Grid,
  InputBase,
  Divider,
} from "@mui/material";
import Cached from "@mui/icons-material/Cached";
import ContentCopy from "@mui/icons-material/ContentCopy";

import theme from "../../../theme";

import { v1, v4 } from "uuid";

const Versions = {
  V1: "1",
  V4: "4",
};

const Formats = {
  LOWER_CASE: 2,
  UPPER_CASE: 3,
};

const generateUuid = (uuidVersion) => {
  switch (uuidVersion) {
    case Versions.V1:
      return v1();
    case Versions.V4:
    default:
      return v4();
  }
};

export default function UUIDGenerator() {
  const defaultVersion = Versions.V4;
  const [version, setVersion] = useState(defaultVersion);

  const defaultFormat = Formats.LOWER_CASE;
  const [format, setFormat] = useState(defaultFormat);
  const [refresh, setRefresh] = useState(false);

  const handleVersionChange = (event, newVersion) => {
    setVersion(newVersion);
  };

  const handleFormatChange = (event, newFormat) => {
    setFormat(newFormat);
  };

  const uuid = useMemo(() => {
    let value = generateUuid(version);

    switch (format) {
      case Formats.UPPER_CASE:
        value = value.toUpperCase();
        break;
      case Formats.LOWER_CASE:
      default:
        value = value.toLowerCase();
        break;
    }
    return value;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [version, format, refresh]);

  return (
    <Paper sx={{ p: 3 }}>
      <h1>UUID Generator</h1>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        paddingY={5}
        sx={{
          "& > :not(style)": { textAlign: "center", my: 1 },
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            borderColor: theme.palette.secondary.main,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            value={uuid}
            inputProps={{ "aria-label": "Generated uuid" }}
          />
          <IconButton
            sx={{ p: "10px" }}
            aria-label="Copy UUID"
            onClick={() => {
              navigator.clipboard.writeText(uuid);
            }}
          >
            <ContentCopy />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="Refresh UUID"
            onClick={() => setRefresh(!refresh)}
          >
            <Cached />
          </IconButton>
        </Paper>

        <Grid container>
          <Grid item md={6} xs={12}>
            <ToggleButtonGroup
              color="primary"
              value={version}
              exclusive
              onChange={handleVersionChange}
            >
              <ToggleButton value={Versions.V1}>{Versions.V1}</ToggleButton>
              <ToggleButton value={Versions.V4}>{Versions.V4}</ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid item md={6} xs={12}>
            <ToggleButtonGroup
              color="primary"
              value={format}
              exclusive
              onChange={handleFormatChange}
            >
              <ToggleButton value={Formats.LOWER_CASE}>Lower case</ToggleButton>
              <ToggleButton value={Formats.UPPER_CASE}>Upper case</ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
