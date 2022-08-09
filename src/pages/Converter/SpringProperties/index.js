import React, { useState, useCallback, useEffect } from "react";
import {
  Paper,
  Stack,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

import inputHandler from "./inputHandler";
import deflate from "./deflate";
import outputFormatter from "./outputFormatter";

import { DefaultsMap, Formats } from "../../../utils/constants";
import ComponentHeading from "../../../components/ComponentHeading";

export default function SpringPropertiesConverter({ title, description }) {
  console.log("Title", title);
  const defaultType = Formats.YAML;
  const [inputType, setInputType] = useState(defaultType);
  const [inputText, setInputText] = useState(
    DefaultsMap.get(defaultType)?.inputValue
  );
  const defaultOutputType = DefaultsMap.get(defaultType)?.outputType;
  const [outputType, setOutputType] = useState(defaultOutputType);

  const [error, setError] = useState();

  const [model, setModel] = useState({});

  const applyInputText = useCallback((type, text) => {
    console.log("ApplyInputText", type, text);
    setError();
    try {
      setInputText(text);
      const mapType = DefaultsMap.get(type);
      const value = inputHandler(type, text);
      setModel({
        inputModelType: mapType?.modelType,
        value: value,
      });
      // setModel(data)
      //setAlertText("");
    } catch (e) {
      //setAlertText(e.message);
      console.error("ApplyInputText", e.message);
      setError(e.message);
      // setProperties([]);
      setModel({});
    }
  }, []);

  useEffect(() => {
    applyInputText(inputType, inputText);
  }, [inputType, inputText, applyInputText]);

  const handleInputTypeChange = (event) => {
    const value = event.target.value;
    setInputType(value);
    setOutputType(value == Formats.YAML ? Formats.PROPERTIES : Formats.YAML);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleOutputTypeChange = (event) => {
    const value = event.target.value;
    setOutputType(value);
    setInputType(value == Formats.YAML ? Formats.PROPERTIES : Formats.YAML);
  };

  var outputTextValue;
  try {
    const properties = deflate(model.value); // Convert the JSON structure into an array of strings
    console.log(model.value);
    outputTextValue = properties ? outputFormatter(outputType, properties) : "";
  } catch (e) {
    console.log(e);
    outputTextValue = "";
  }

  return (
    <>
      <ComponentHeading title={title} description={description} />
      <Stack spacing={3}>
        <Paper variant="outlined" sx={{ p: 3 }}>
          <Stack spacing={1}>
            <FormControl>
              <InputLabel id="input-type-select-label">Input</InputLabel>
              <Select
                labelId="input-type-select-label"
                id="input-type-select"
                value={inputType}
                onChange={handleInputTypeChange}
                fullWidth
                label="Input"
              >
                {Object.keys(Formats).map((item, index) => (
                  <MenuItem key={`input-${index}`} value={Formats[item]}>
                    {Formats[item]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="input-textarea"
              onChange={handleInputChange}
              multiline
              fullWidth
              error={error}
              helperText={error}
              minRows={10}
              maxRows={30}
              defaultValue={inputText}
            />
          </Stack>
        </Paper>
        <Paper variant="outlined" sx={{ p: 3 }}>
          <Stack spacing={1}>
            <FormControl>
              <InputLabel id="output-type-select-label">Output</InputLabel>
              <Select
                labelId="output-type-select-label"
                id="output-type-select"
                value={outputType}
                onChange={handleOutputTypeChange}
                fullWidth
                label="Input"
              >
                {Object.keys(Formats).map((item, index) => (
                  <MenuItem key={`input-${index}`} value={Formats[item]}>
                    {Formats[item]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="output-textarea"
              multiline
              fullWidth
              minRows={10}
              maxRows={30}
              value={outputTextValue}
            />
          </Stack>
        </Paper>
      </Stack>
    </>
  );
}
