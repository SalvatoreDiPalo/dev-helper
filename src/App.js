import "./App.css";
import { Routes, Route } from "react-router-dom";

import ResponsiveAppBar from "./components/AppBar";

import Home from "./pages/Home";
import Converter from "./pages/Converter";
import UUIDGenerator from "./pages/Generator/UUID";
import { Container } from "@mui/material";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Container className="root-cont">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Converter />} />
          <Route path="/generator/uuid" element={<UUIDGenerator />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
