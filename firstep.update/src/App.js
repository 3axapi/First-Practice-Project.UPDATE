import React from "react";
import './App.css';
import "./fonts/Cousine/Cousine.css";

import SNavigation from "./components/S-Navigation/S-Navigation";
import STopSection from "./components/S-Top-Section/S-Top-Section";
import SSectionAbout from "./components/S-Section-About/S-Section-About";
import SSectionScienceServices from "./components/S-Section-Science-Services/S-Section-Science-Services";
import SSectionTeam from "./components/S-Section-Team/S-Section-Team";
import SSectionPricing from "./components/S-Section-Pricing/S-Section-Pricing";
import SSectionSubjectSercives from "./components/S-Section-Subject-Sercives/S-Section-Subject-Sercives";
import SSectionContact from "./components/S-Section-Contact/S-Section-Contact";
import SFooter from "./components/S-Footer/S-Footer";

function App() {
  return (
    <div className="body">
      <SNavigation />
      {/* <STopSection />
      <SSectionAbout />
      <SSectionScienceServices />
      <SSectionTeam />
      <SSectionPricing />
      <SSectionSubjectSercives />
      <SSectionContact />
      <SFooter /> */}
    </div>
  );
}

export default App;
