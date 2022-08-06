import "./App.css";
import { Routes, Route } from "react-router-dom";

import ResponsiveAppBar from "./components/AppBar";

import Home from "./pages/Home";
import Converter from "./pages/Converter";
import { Container } from "@mui/material";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Container className="root-cont">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Converter />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
