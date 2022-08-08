import "./App.css";
import { Routes, Route } from "react-router-dom";

import ResponsiveAppBar from "./components/AppBar";

import Home from "./pages/Home";
import SpringPropertiesConverter from "./pages/Converter/SpringProperties";
import UUIDGenerator from "./pages/Generator/UUID";
import Base64Encoder from "./pages/Encoder/Base64";
import { Container } from "@mui/material";

import ComponentTemplate from "./templates/Component";

const buildComponentPage = (title, component, description = "") => {
  return (
    <ComponentTemplate
      title={title}
      description={description}
      component={component}
    />
  );
};

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Container className="root-cont" component="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/converters/spring-properties"
            element={<SpringPropertiesConverter />}
          />
          <Route path="/generators/uuid" element={<UUIDGenerator />} />
          <Route
            path="/encoders/base64"
            element={buildComponentPage(
              "Base64 Encoder / Decoder",
              <Base64Encoder />
            )}
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
