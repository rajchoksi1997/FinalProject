import "./App.css";
import React, { useState } from "react";

import { SlideLogin } from "./components/SlideLogin";
import { BrowserRouter as Router, Switch, Routes, Route, Redirect, BrowserRouter } from 'react-router-dom';
import RegistrationInvestor from './components/RegistrationInvestor';
import RegistrationStartup from './components/RegistrationStartup';
import StartupLandingPage from "./components/StartupLandingPage";
import InvestorLandingPage from "./components/InvestorLandingPage";
import InvestorProfile from "./components/InvestorProfile";
import StartupProfile from "./components/StartupProfile";



function App() {
  // const [currentForm, setCurrentForm] = useState("login");

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // };
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SlideLogin />} />
        <Route path="/signup/investor" element={<RegistrationInvestor />} />
        <Route path="/signup/startup" element={<RegistrationStartup />} />
        <Route path="/startup/landingPage" element={<StartupLandingPage />} />
        <Route path="/investor/landingpage" element={<InvestorLandingPage />} />
        <Route path="/investor/Profile" element={<InvestorProfile />} />
        <Route path="/startup/Profile" element={<StartupProfile />} />
      </Routes>

    </BrowserRouter>
    // <Router>

    //   <div className="App">
    //     {/* {currentForm === "login" ? (
    //     <Login onFormSwitch={toggleForm} />
    //   ) : (
    //     <SignUpInvester onFormSwitch={toggleForm} />
    //   )} */}

    //     <SlideLogin />
    //     <Switch>
    //       <Route exact path="/signup/investor">
    //         <RegistrationInvestor />
    //       </Route>
    //       <Route exact path="/signup/startup">
    //         <RegistrationStartup />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
