export const Formats = {
  YAML: "Spring Boot YAML",
  PROPERTIES: "Spring Boot Properties",
};

export const ModelType = {
  ENV: 1,
  FLAT: 2,
};

export const DefaultsMap = new Map([
  [
    Formats.YAML,
    {
      modelType: ModelType.FLAT,
      outputType: Formats.PROPERTIES,
      inputValue:
        "foo-bar:\n  baz:\n    - value1\n    - value2\n  enabled: true\nabcDef: value3",
    },
  ],
  [
    Formats.PROPERTIES,
    {
      modelType: ModelType.FLAT,
      outputType: Formats.YAML,
      inputValue:
        "foo-bar.baz[0]=value1\nfoo-bar.baz[1]=value2\nfoo-bar.enabled=true\nabcDef=value3",
    },
  ],
]);
