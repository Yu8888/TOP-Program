import React from "react";

export default function OnBorderPage() {
  return (
    <div data-testid="schedule">
      <h3>OnBorder Form</h3>
      <form action="">
        <div className="quesiton card">
          <h3>How familiar are you with the Java</h3>
          <input type="radio" name="java" id="none" className="input" />
          <label htmlFor="none">None</label>
          <input type="radio" name="java" id="Beginner" className="input" />
          <label htmlFor="Beginner">Beginner</label>
          <input type="radio" name="java" id="Expert" className="input" />
          <label htmlFor="Expert">Expert</label>
        </div>
        <div className="quesiton card">
          <h3>How familiar are you with the SQL</h3>
          <input type="radio" name="sql" id="none" className="input" />
          <label htmlFor="none">None</label>
          <input type="radio" name="sql" id="Beginner" className="input" />
          <label htmlFor="Beginner">Beginner</label>
          <input type="radio" name="sql" id="Expert" className="input" />
          <label htmlFor="Expert">Expert</label>
        </div>
        <div className="quesiton card">
          <h3>How familiar are you with the Agile</h3>
          <input type="radio" name="agile" id="none" className="input" />
          <label htmlFor="none">None</label>
          <input type="radio" name="agile" id="Beginner" className="input" />
          <label htmlFor="Beginner">Beginner</label>
          <input type="radio" name="agile" id="Expert" className="input" />
          <label htmlFor="Expert">Expert</label>
        </div>
        <div className="quesiton card">
          <h3>How familiar are you with the React</h3>
          <input type="radio" name="react" id="none" className="input" />
          <label htmlFor="none">None</label>
          <input type="radio" name="react" id="Beginner" className="input" />
          <label htmlFor="Beginner">Beginner</label>
          <input type="radio" name="react" id="Expert" className="input" />
          <label htmlFor="Expert">Expert</label>
        </div>
        <div className="quesiton card">
          <h3>How familiar are you with the AWS</h3>
          <input type="radio" name="aws" id="none" className="input" />
          <label htmlFor="none">None</label>
          <input type="radio" name="aws" id="Beginner" className="input" />
          <label htmlFor="Beginner">Beginner</label>
          <input type="radio" name="aws" id="Expert" className="input" />
          <label htmlFor="Expert">Expert</label>
        </div>
        <div className="quesiton card">
          <h3>How familiar are you with the Mongodb</h3>
          <input type="radio" name="db" id="none" className="input" />
          <label htmlFor="none">None</label>
          <input type="radio" name="db" id="Beginner" className="input" />
          <label htmlFor="Beginner">Beginner</label>
          <input type="radio" name="db" id="Expert" className="input" />
          <label htmlFor="Expert">Expert</label>
        </div>
        <div className="btn">
          <button className="button" disabled>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
