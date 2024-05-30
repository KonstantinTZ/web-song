import React from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes } from "../router/routes";
import HomePage from "../pages/HomePage/HomePage";

function AppRouter(props) {
  return (
    <>
      <Routes>
        {privateRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default AppRouter;
