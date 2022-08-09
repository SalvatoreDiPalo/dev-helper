import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";

import { Container } from "@mui/material";

import ResponsiveAppBar from "./components/AppBar";
import ComponentsContainer from "./templates/ComponentsContainer";

import Home from "./pages/Home";

import { components } from "./utils/components";

const ComponentPage = () => {
  return <Outlet />;
};

function App() {
  const routes = components.map((item, index) => (
    <Route
      path={item.path}
      element={<ComponentPage />}
      key={`${item.title}-${index}`}
    >
      <Route
        index
        element={
          <ComponentsContainer
            title={item.title}
            components={item.components}
          />
        }
      />
      {item.components.map((component) => {
        return (
          <Route
            path={component.endpoint}
            element={component.component}
            key={component.name}
          />
        );
      })}
    </Route>
  ));

  return (
    <>
      <ResponsiveAppBar />
      <Container className="root-cont" component="main">
        <Routes>
          <Route path="/" element={<Home />} />
          {routes}
        </Routes>
      </Container>
    </>
  );
}

export default App;
