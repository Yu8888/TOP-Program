import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ScheduleForm from "./pages/ScheduleFormPage";

import HomePage from "./pages/HomePage";
import OnBorderFormPage from "./pages/OnBorderFormPage";
import OrganizationFormPage from "./pages/OrganizationFormPage";
function App() {
  return (
    <Router>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/scheduleform">
        <ScheduleForm />
      </Route>
      <Route path="/onborderform">
        <OnBorderFormPage />
      </Route>
      <Route path="/organizationform">
        <OrganizationFormPage />
      </Route>
    </Router>
  );
}

export default App;
