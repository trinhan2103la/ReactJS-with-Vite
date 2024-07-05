/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Defaultlayout } from "./components/layout";

export default function App() {
  return (
    <Router>
      <div className="box-border m-0 p-0">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = Defaultlayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}
