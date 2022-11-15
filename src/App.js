import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Repos from "./Components/Repos/Repos";
import ErrorPage from './Pages/404page'
import RepoPage from "./Components/Repos/Repopage";
import Layout from "./Pages/Layout";
import { ErrorBoundary } from "react-error-boundary"
// import Footer from "./Components/Footer/Footer";
import Foot from "./Components/Footer/Foot";


function App() {

  function errorBoundary ({error})  {
    return<div>
      <h1>Sorry, this page has crashed!</h1>
      <button to={"/Repos"}>Back</button>
      {error.message}
      </div>
}

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={errorBoundary}>
      <Router>
        <Routes> 
          <Route path="/" element={<Layout />}>     
          <Route index element={<Home />} />
          <Route path="/Repos" element={<Repos />} />
          <Route path="/Cards/:name" element={<RepoPage />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
      {/* <Footer /> */}
      <Foot />
      </ErrorBoundary>
    </div>
  );
 
  }
export default App;
