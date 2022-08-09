/**
 * https://github.com/jusufazer/yaml2properties/blob/master/src/scripts/parser.js
 * Deflates the given JSON structure into an array of strings in the format
 *   <key>=<value>
 * where key is a string constructed from traversing the json hierarchy, and value is the bottom most string value for
 * that particular hierarchy traversal.
 *
 * @param json
 * @param prefix
 * @returns {Array}
 */
const deflate = (json, prefix) => {
  var result = [];
  var keys = Object.keys(json);
  keys.forEach(function (key) {
    var _prefix;
    var _currPrefix = key || "";
    if (isNumeric(key)) {
      _currPrefix = "[" + _currPrefix + "]";
    }

    if (json[key] && typeof json[key] === "object") {
      if (!Array.isArray(json[key])) {
        _currPrefix = _currPrefix.concat(".");
      }
      _prefix = prefix ? prefix.concat(_currPrefix) : _currPrefix;
      result = result.concat(deflate(json[key], _prefix));
    } else {
      _prefix = prefix ? prefix.concat(_currPrefix) : _currPrefix;
      result.push(_prefix.concat("=").concat(json[key] || ""));
    }
  });

  return result;
};

const isNumeric = function (str) {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
};

export default deflate;
