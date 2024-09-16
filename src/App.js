import Login from "./pages/login/Login"
import './App.css';
import UserHome from "./pages/userHome/UserHome"
import UserHome2 from "./pages/userHome2/UserHome2"
import UserHome3 from "./pages/userHome3/UserHome3"
import CompanyHome from "./pages/companyHome/CompanyHome"
import CompanyCurrent from "./pages/companyCurrent/CompanyCurrent"
import UserComments from "./pages/userComments/UserComments"
import MiningForm from "./pages/miningform/MiningForm"
import RegulatorHome from "./pages/regulatorHome/RegulatorHome"
import RegulatorsList from "./pages/regulatorsList/RegulatorsList"
import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from "./pages/register/Register"

function App() {
  const companiesList = ["Mining Co", "Eco Mines", "Sustainable Mining Inc.", "Green Earth Mining"]
  const comments = ["Awesome company! Very good, just the best!", "Just the worst! They ruined everything and my day has never gotten worse."]
  const susScore = 8;
  const opScore = 10
  const sentScore = 6
  //Pass down scores to the Summarizer component using usecontext
  return (
    <Router>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Role-based Routes */}
        <Route path="/user-home" element={<UserHome />} />
        <Route path="/company-home" element={<CompanyHome />} />
        <Route path="/regulator-home" element={<RegulatorHome />} />
        <Route path="/mining-form" element={<MiningForm />} />
        {/* Example: Additional routes for UserHome components */}
        <Route path="/area/:name" element={<UserHome2 />} />
        <Route path="/area/:name/company/:company" element={<UserHome3 />} />
      </Routes>
    </Router>
    //<div>
     // <Register/>
     // {/* <RegulatorsList companies={companiesList} areaName="Arizona"/> */}
      //{/* <RegulatorHome/> */}
     // {/* <MiningForm company={"Mining Co."}/> */}
     // {/* <UserComments comments={comments}/> */}
     // {/* <CompanyHome/> */}
     // {/* <CompanyCurrent areaName="Arizona"/> */}
     // {/* <UserHome/> */}
     // {/* <UserHome2 name= "Arizona" image= "https://www.travelandleisure.com/thmb/UGWR8DL_Dm8zqVaS7m2Kc6XSfqE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-mcdowell-mountains-arizona-AZTG0324-f70f2e62c4af4889b8da2d466478d0b3.jpg" /> */}
     // {/* <Login/> */}
     // {/* <UserHome3 companyName="Mining Co"/> */}
  // </div>
  );
}

export default App;
