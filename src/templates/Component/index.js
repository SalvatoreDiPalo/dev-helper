import ComponentHeading from "../../components/ComponentHeading";

export default function ComponentTemplate({ title, description, component }) {
  return (
    <>
      <ComponentHeading title={title} description={description} />
      {component}
    </>
  );
}
