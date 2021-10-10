import React from "react";

export default function OnBorderPage() {
  return (
    <div>
      <h3>OnBorder Form</h3>
      <form action="">
        <div className="quesiton card">
          <h3 for="">How familiar are you with the Java</h3>
          <input type="radio" name="java" id="none" classname="input" />
          <label for="none">None</label>
          <input type="radio" name="java" id="Beginner" classname="input" />
          <label for="Beginner">Beginner</label>
          <input type="radio" name="java" id="Expert" classname="input" />
          <label for="Expert">Expert</label>
        </div>
        <div className="quesiton card">
          <h3 for="">How familiar are you with the SQL</h3>
          <input type="radio" name="sql" id="none" classname="input" />
          <label for="none">None</label>
          <input type="radio" name="sql" id="Beginner" classname="input" />
          <label for="Beginner">Beginner</label>
          <input type="radio" name="sql" id="Expert" classname="input" />
          <label for="Expert">Expert</label>
        </div>
        <div className="quesiton card">
          <h3 for="">How familiar are you with the Agile</h3>
          <input type="radio" name="agile" id="none" classname="input" />
          <label for="none">None</label>
          <input type="radio" name="agile" id="Beginner" classname="input" />
          <label for="Beginner">Beginner</label>
          <input type="radio" name="agile" id="Expert" classname="input" />
          <label for="Expert">Expert</label>
        </div>
        <div className="quesiton card">
          <h3 for="">How familiar are you with the React</h3>
          <input type="radio" name="react" id="none" classname="input" />
          <label for="none">None</label>
          <input type="radio" name="react" id="Beginner" classname="input" />
          <label for="Beginner">Beginner</label>
          <input type="radio" name="react" id="Expert" classname="input" />
          <label for="Expert">Expert</label>
        </div>
        <div className="quesiton card">
          <h3 for="">How familiar are you with the AWS</h3>
          <input type="radio" name="aws" id="none" classname="input" />
          <label for="none">None</label>
          <input type="radio" name="aws" id="Beginner" classname="input" />
          <label for="Beginner">Beginner</label>
          <input type="radio" name="aws" id="Expert" classname="input" />
          <label for="Expert">Expert</label>
        </div>
        <div className="quesiton card">
          <h3 for="">How familiar are you with the Mongodb</h3>
          <input type="radio" name="db" id="none" classname="input" />
          <label for="none">None</label>
          <input type="radio" name="db" id="Beginner" classname="input" />
          <label for="Beginner">Beginner</label>
          <input type="radio" name="db" id="Expert" classname="input" />
          <label for="Expert">Expert</label>
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
