import yaml from "js-yaml";
// @ts-ignore
import _ from "lodash";
import { Formats } from "../../utils/constants";

const inputHandler = (type, text) => {
  var data;
  if (type === Formats.YAML) {
    // https://github.com/jusufazer/yaml2properties/blob/master/src/scripts/processor.js
    data = yaml.load(text);
    if (typeof data !== "object") {
      throw new Error("YAML doesn't seem valid");
    }
  } else if (type === Formats.PROPERTIES) {
    // const flattened = deflated.join("\r\n")
    data = text
      .split("\n") //divides lines
      .filter(Boolean) //removes empty lines
      .reduce((acc, line) => {
        if (line.includes("=")) {
          // https://stackoverflow.com/a/4607799/1098564
          _.set(acc, ...line.split(/=(.+)/));
        } else if (line.includes(": ")) {
          _.set(acc, ...line.split(/: (.+)/));
        } else {
          throw new Error("Invalid .properties values");
        }
        return acc;
      }, {});
  } else if (type === Formats.SIMPLE) {
    data = text
      .split("\n") //divides lines
      .filter(Boolean) //removes empty lines
      .reduce((acc, line) => {
        _.set(acc, ...line.split("="));
        return acc;
      }, {});
  } else if (type === Formats.TERMINAL) {
    data = text
      .split(" ") //divides lines
      .filter(Boolean) //removes empty lines
      .reduce((acc, line) => {
        _.set(acc, ...line.split("="));
        return acc;
      }, {});
  } else if (type === Formats.KUBERNETES) {
    data = text
      .replace(/>-/gm, "")
      .replace(/(\r\n|\n|\r)/gm, "")
      .trim()
      .split("- name: ") //divides lines
      .filter(Boolean) //removes empty lines
      .reduce((acc, line) => {
        var pair = line.split("  value: ");
        if (pair[1]) {
          pair[1] = pair[1]
            // trim single quotes at beginning and end
            .replace(/^['](.+(?=[']$))[']$/, "$1") // https://stackoverflow.com/a/19156197/1098564
            // trim out double quotes (TODO: this needs improvement and is definitely bug prone...but works for most simple values I come across)
            .replace(/"([^"]+(?="))"/g, "$1");
        }
        _.set(acc, ...pair);
        return acc;
      }, {});
  } else {
    throw new Error("Unsupported input type");
  }
  // https://stackoverflow.com/a/33510710/1098564
  data = JSON.parse(JSON.stringify(data).replace(/"\s+|\s+"/g, '"'));
  return data;
};

export default inputHandler;
