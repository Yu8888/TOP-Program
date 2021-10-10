import SingleButton from "../components/SingleButton";
import React from "react";

function HomePage() {
  return (
    <div className="homepage">
      <h2 className="heading">Teams Onboarder Process Support</h2>
      <SingleButton buttonText="Schedule Forms" routeLink="scheduleform" />
      <SingleButton buttonText="Onboarder Form" routeLink="onborderform" />
    </div>
  );
}
export default HomePage;
