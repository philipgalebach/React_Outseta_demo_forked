/*
 * This Outseta example skips the nocode module,
 * using code instead for the same functionality.
 *
 * The script is added in the head,
 * and is therefore initialized on page load.
 *
 * The interesting code is happening in AuthProvider
 *
 */

import { Link, Route, Routes, Outlet, BrowserRouter } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import Layout from "./Layout";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route
            path="/"
            element={
              <AuthProvider>
                <Layout>
                  <Outlet />
                </Layout>
              </AuthProvider>
            }
          >
            <Route>
              <Route
                index
                element={
                  <>
                    <h2>Home</h2>
                    <p>Home page visible to all.</p>
                  </>
                }
              />
              <Route
                path="/another"
                element={
                  <>
                    <h2>Another Public Page</h2>
                    <p>Another page visible to all.</p>
                  </>
                }
              />

              <Route
                path="/basic"
                element={
                  <ProtectedRoute>
                    <Outlet />
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  element={
                    <>
                      <h2>Members only content</h2>
                      <p>Content available for all plans.</p>
                      <p>
                        Check out some more{" "}
                        <Link to="another">member only content</Link>.
                      </p>
                    </>
                  }
                />

                <Route
                  path="another"
                  element={
                    <>
                      <h2>More members only content</h2>
                      <p>Content available for all plans.</p>
                      <p>
                        <Link to="..">Go back</Link>
                      </p>
                    </>
                  }
                />
              </Route>

              <Route
                path="pro"
                element={
                  <ProtectedRoute pro>
                    <Outlet />
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  element={
                    <>
                      <h2>Pro Members only content</h2>
                      <p>
                        Content available on the <strong>pro</strong> plans.
                      </p>
                      <p>
                        Check out some more{" "}
                        <Link to="another">pro only content</Link>.
                      </p>
                    </>
                  }
                />

                <Route
                  path="another"
                  element={
                    <>
                      <h2>More members only content</h2>
                      <p>Content available for all plans.</p>
                      <p>
                        <Link to="..">Go back</Link>
                      </p>
                    </>
                  }
                />
              </Route>

              <Route
                path="*"
                element={
                  <>
                    <h2>Not found</h2>
                    <p>There's nothing here!</p>
                  </>
                }
              />
            </Route>
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}
