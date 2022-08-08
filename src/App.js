import "./App.css";
import { Routes, Route } from "react-router-dom";

import ResponsiveAppBar from "./components/AppBar";

import Home from "./pages/Home";
import SpringPropertiesConverter from "./pages/Converter/SpringProperties";
import UUIDGenerator from "./pages/Generator/UUID";
import Base64Encoder from "./pages/Encoder/Base64";
import { Container } from "@mui/material";

import ComponentTemplate from "./templates/Component";
import UrlEncoder from "./pages/Encoder/Url";

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
          <Route
            path="/"
            element={buildComponentPage(
              "Dev Helper",
              <Home />,
              "A must for developing"
            )}
          />
          <Route
            path="/converters/spring-properties"
            element={buildComponentPage(
              "Spring Properties Converter",
              <SpringPropertiesConverter />
            )}
          />
          <Route
            path="/generators/uuid"
            element={buildComponentPage("UUID Generator", <UUIDGenerator />)}
          />
          <Route
            path="/encoders/base64"
            element={buildComponentPage(
              "Base64 Encoder / Decoder",
              <Base64Encoder />
            )}
          />
          <Route
            path="/encoders/url"
            element={buildComponentPage(
              "Url Encoder / Decoder",
              <UrlEncoder />
            )}
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
