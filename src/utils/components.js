import SpringPropertiesConverter from "../pages/Converter/SpringProperties";
import UUIDGenerator from "../pages/Generator/UUID";
import Base64Encoder from "../pages/Encoder/Base64";

import UrlEncoder from "../pages/Encoder/Url";
import StringCaseConverter from "../pages/Converter/StringCase";

export const components = [
  {
    title: "Converters",
    path: "converters",
    components: [
      {
        name: "Spring Properties Converter",
        endpoint: "spring-properties",
        component: (
          <SpringPropertiesConverter title="Spring Properties Converter" />
        ),
      },
      {
        name: "String Case Converter",
        endpoint: "string-case",
        component: <StringCaseConverter title="String Case Converter" />,
      },
    ],
  },
  {
    title: "Generators",
    path: "generators",
    components: [
      {
        name: "UUID Generator",
        endpoint: "uuid",
        component: <UUIDGenerator title="UUID Generator" />,
      },
    ],
  },
  {
    title: "Encoders/Decoders",
    path: "encoders",
    components: [
      {
        name: "Base64",
        endpoint: "base64",
        component: <Base64Encoder title="Base64 Encoder/Decoder" />,
      },
      {
        name: "Url",
        endpoint: "url",
        component: <UrlEncoder title="Url Encoder/Decoder" />,
      },
    ],
  },
];

export default components;
