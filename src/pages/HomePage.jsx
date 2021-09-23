import SingleButton from "../components/SingleButton";
import React from "react";
function HomePage() {
  return (
    <div className="homepage">
      <h2 className="heading">Teams Onboarder Process Support</h2>
      <SingleButton buttonText="Schedule Forms" />
      <SingleButton buttonText="Onboarder Form" />
      <SingleButton buttonText="Organization Infomation Form" />
    </div>
  );
}
export default HomePage;
