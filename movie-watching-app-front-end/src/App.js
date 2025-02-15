import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { privateRoutes, publicRoutes } from "./routes";
import PrivateRoute from "./components/components/authentication";
function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout || Fragment;
          const Page = route.element;
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
        {privateRoutes.map((route, index) => {
          const Layout = route.layout || Fragment;
          const Page = route.element;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                // <PrivateRoute>
                  <Layout>
                    <Page />
                  </Layout>
                // </PrivateRoute>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
