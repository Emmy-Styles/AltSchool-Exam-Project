import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Repos from "./Components/Repos/Repos";
import ErrorPage from './Pages/404page'
import RepoPage from "./Components/Repos/Repopage";
import Layout from "./Pages/Layout";
import { ErrorBoundary } from "react-error-boundary"
import Foot from "./Components/Footer/Foot";
import Contact from "./Components/Contact/Contact";



function App() {
  

  function errorBoundary ({error})  {
    return<div>
      <h1>Sorry, this page has crashed!</h1>
      {/* <Link to={"/Repos"}><button>Back</button></Link> */}
      {error.message}
      </div>
}

const [ user, setUser] = useState({})

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={errorBoundary}>
      <Router>
        <Routes> 
          <Route path="/" element={<Layout />}>     
          <Route index element={<Home setUser={setUser} />} />
          <Route path="/Repos" element={<Repos user={user}/>} />
          <Route path="/repos/:name" element={<RepoPage user={user}/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
      <Foot />
      </ErrorBoundary>
    </div>
  );
 
  }
export default App;
