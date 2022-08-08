import "./App.css";
import { Routes, Route } from "react-router-dom";

import ResponsiveAppBar from "./components/AppBar";

import Home from "./pages/Home";
import SpringPropertiesConverter from "./pages/Converter/SpringProperties";
import UUIDGenerator from "./pages/Generator/UUID";
import Base64Encoder from "./pages/Encoder/Base64";
import { Container } from "@mui/material";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Container className="root-cont">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/converters/spring-properties"
            element={<SpringPropertiesConverter />}
          />
          <Route path="/generators/uuid" element={<UUIDGenerator />} />
          <Route path="/encoders/base64" element={<Base64Encoder />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
