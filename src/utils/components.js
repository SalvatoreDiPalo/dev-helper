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
        component: <SpringPropertiesConverter />,
      },
      {
        name: "String Case Converter",
        endpoint: "string-case",
        component: <StringCaseConverter />,
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
        component: <UUIDGenerator />,
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
        component: <Base64Encoder />,
      },
      {
        name: "Url",
        endpoint: "url",
        component: <UrlEncoder />,
      },
    ],
  },
];

export default components;
