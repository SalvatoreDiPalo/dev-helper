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

import _ from "lodash";

import theme from "../../../theme";
import { loremIpsum } from "../../../utils/constants";
import ComponentHeading from "../../../components/ComponentHeading";

const Formats = {
  LOWER_CASE: 1,
  UPPER_CASE: 2,
  CAMEL_CASE: 3,
  CAPITALIZE: 4,
  KEBAB_CASE: 5,
  SNAKE_CASE: 6,
};

export default function StringCaseConverter({ title, description }) {
  const defaultFormat = Formats.LOWER_CASE;
  const [format, setFormat] = useState(defaultFormat);

  const [inputText, setInputText] = useState(loremIpsum);

  const [error, setError] = useState("");

  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFormatChange = (event, newFormat) => {
    if (newFormat !== null) {
      setFormat(newFormat);
    }
  };

  const generatedValue = useMemo(() => {
    let value = "";
    setError("");
    try {
      switch (format) {
        case Formats.CAMEL_CASE:
          value = _.camelCase(inputText);
          break;
        case Formats.CAPITALIZE:
          value = _.capitalize(inputText);
          break;
        case Formats.KEBAB_CASE:
          value = _.kebabCase(inputText);
          break;
        case Formats.SNAKE_CASE:
          value = _.snakeCase(inputText);
          break;
        case Formats.LOWER_CASE:
          value = inputText.toLowerCase();
          break;
        case Formats.UPPER_CASE:
        default:
          value = inputText.toUpperCase();
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
              <ToggleButton value={Formats.LOWER_CASE}>Lower case</ToggleButton>
              <ToggleButton value={Formats.UPPER_CASE}>Upper case</ToggleButton>
              <ToggleButton value={Formats.CAMEL_CASE}>Camel case</ToggleButton>
            </ToggleButtonGroup>
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
              <ToggleButton value={Formats.CAPITALIZE}>Capitalize</ToggleButton>
              <ToggleButton value={Formats.KEBAB_CASE}>Kebab case</ToggleButton>
              <ToggleButton value={Formats.SNAKE_CASE}>Snake case</ToggleButton>
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
