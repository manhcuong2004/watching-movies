import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { privateRoutes } from "./routes";
function App() {
  return (
    <Router>
      <Routes>
        {privateRoutes.map((route, index) => {
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
            >
              {route.children?.map((child, childIndex) => {
                console.log(child);
                return (
                  <Route
                    key={childIndex}
                    path={child.path}
                    element={<child.element />}
                  >
                    {child.children?.map((grandChild, grandChildIndex) => {
                      console.log(grandChild);
                      return (
                        <Route
                          key={grandChildIndex}
                          path={grandChild.path}
                          element={<grandChild.element />}
                        />
                      );
                    })}
                  </Route>
                );
              })}
            </Route>
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
