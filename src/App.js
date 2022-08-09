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
  const routes = components.map((route, index) => (
    <Route
      path={route.path}
      element={<ComponentPage />}
      key={`${route.title}-${index}`}
    >
      <Route
        index
        element={
          <ComponentsContainer
            title={route.title}
            path={route.path}
            components={route.components}
          />
        }
      />
      {route.components.map((item) => {
        return (
          <Route
            path={item.endpoint}
            element={item.component}
            key={item.endpoint}
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
