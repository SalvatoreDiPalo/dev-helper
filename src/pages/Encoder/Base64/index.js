import React, { useMemo, useState } from "react";
import {
  Paper,
  Box,
  IconButton,
  ToggleButtonGroup,
  ToggleButton,
  TextField,
  Alert,
} from "@mui/material";
import ContentCopy from "@mui/icons-material/ContentCopy";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { decode as base64_decode, encode as base64_encode } from "base-64";

import theme from "../../../theme";

import { loremIpsum } from "../../../utils/constants";
import ComponentHeading from "../../../components/ComponentHeading";

const Formats = {
  ENCODE: 1,
  DECODE: 2,
};

export default function Base64Encoder({ title, description }) {
  const defaultFormat = Formats.ENCODE;
  const [format, setFormat] = useState(defaultFormat);

  const [inputText, setInputText] = useState(loremIpsum);

  const [error, setError] = useState("");

  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFormatChange = (event, newFormat) => {
    setFormat(newFormat);
  };

  const generatedValue = useMemo(() => {
    let value = "";
    setError("");
    try {
      switch (format) {
        case Formats.ENCODE:
          value = base64_encode(inputText);
          break;
        case Formats.DECODE:
        default:
          value = base64_decode(inputText);
          break;
      }
    } catch (ex) {
      setError(ex.message);
    }
    return value;
  }, [format, inputText]);

  return (
    <>
      <ComponentHeading title={title} description={description} />
      <Paper variant="outlined" sx={{ p: 3, mb: 2 }}>
        <Box component="form" noValidate autoComplete="off">
          <Paper
            variant="outlined"
            sx={{
              alignItems: "center",
              width: "100%",
              borderColor: theme.palette.secondary.main,
            }}
          >
            <ToggleButtonGroup
              color="primary"
              value={format}
              exclusive
              fullWidth
              onChange={handleFormatChange}
              css={css`
                & > button {
                  border-radius: 0;
                }
              `}
            >
              <ToggleButton value={Formats.ENCODE}>Encode</ToggleButton>
              <ToggleButton value={Formats.DECODE}>Decode</ToggleButton>
            </ToggleButtonGroup>
            <TextField
              id="input-textarea"
              multiline
              fullWidth
              css={css`
                flex: 1;

                & > div {
                  border-radius: 0;
                }
              `}
              defaultValue={inputText}
              onChange={handleInputTextChange}
              minRows={10}
              maxRows={30}
              inputProps={{ "aria-label": "Generated value" }}
            />
            {error && <Alert severity="error">{error}</Alert>}
          </Paper>
        </Box>
      </Paper>

      <Paper variant="outlined" sx={{ p: 3 }}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            "& > :not(style)": { textAlign: "center", my: 1 },
          }}
        >
          <Paper
            variant="outlined"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              borderColor: theme.palette.secondary.main,
            }}
          >
            <TextField
              id="input-textarea"
              multiline
              sx={{ flex: 1 }}
              value={generatedValue}
              minRows={10}
              maxRows={30}
              inputProps={{ "aria-label": "Generated value" }}
            />
            <IconButton
              sx={{ p: "8px" }}
              aria-label="Copy value"
              onClick={() => {
                navigator.clipboard.writeText(generatedValue);
              }}
            >
              <ContentCopy />
            </IconButton>
          </Paper>
        </Box>
      </Paper>
    </>
  );
}
