import yaml from "js-yaml";
import _ from "lodash";
import { Formats } from "../../../utils/constants";

const outputFormatter = (outputType, properties) => {
  if (outputType === Formats.PROPERTIES) {
    return propertiesFormatter(properties);
  } else if (outputType === Formats.YAML) {
    return yamlFormatter(properties);
  } else {
    throw new Error("outputType " + outputType + "not supported");
  }
};

const propertiesFormatter = (properties) => {
  var result = "";
  properties.forEach((property) => {
    result = result
      .concat(property.split("=")[0])
      .concat("=")
      .concat(property.split("=")[1])
      .concat("\n");
  });
  return result;
};

const yamlFormatter = (properties) => {
  var result = properties
    .filter(Boolean) //removes empty lines
    .reduce((acc, line) => {
      var pair = line.split("=");
      if (pair[1]) {
        if (pair[1] === "true") {
          pair[1] = true;
        } else if (pair[1] === "false") {
          pair[1] = false;
        }
      }
      _.set(acc, ...pair);
      return acc;
    }, {});
  return yaml.dump(result);
};

export default outputFormatter;
