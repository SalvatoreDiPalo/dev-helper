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

export const loremIpsum =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export const defaultUri = "https://google.com?q=Sample text with spaces!!";
