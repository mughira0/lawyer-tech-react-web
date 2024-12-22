import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense, lazy, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Tawk from "./components/Tawlk";
import Loader from "./components/loader";
// import BeforeLoginRoute from "./Helper/BeforeLoginRoute";

// const AddEditSession = lazy(() => import("./Pages/AddEditSession"));
const Login = lazy(() => import("./pages/auth/login"));
const Home = lazy(() => import("./pages/web/home"));

function App() {
  useEffect(() => {
    // Add Tawk.to script
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://embed.tawk.to/6768087649e2fd8dfefbee82/1ifn625h7";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      var s0 = document.getElementsByTagName("script")[0];
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);
  return (
    <>
      <ToastContainer />

      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route
              exact
              path="/add-edit-session"
              element={<ProtectedRoute file={<AddEditSession />} />}
            />
            <Route
              exact
              path="/courses"
              element={<ProtectedRoute file={<Courses />} />}
            />
            <Route
              exact
              path="/courses-topics/:id"
              element={<ProtectedRoute file={<Topics />} />}
            />
            <Route
              exact
              path="/courses-topics/:courseId/:topicId"
              element={<ProtectedRoute file={<SubTopics />} />}
            />
            <Route
              exact
              path="/sessions"
              element={<ProtectedRoute file={<Sessions />} />}
            />
            <Route
              path="/login"
              exact
              element={<BeforeLoginRoute file={<Login />} />}
            /> */}
            {/* <Route path="*" element={<BeforeLoginRoute file={<Login />} />} /> */}
          </Routes>
        </Router>
      </Suspense>
      <Tawk />
    </>
  );
}

export default App;
