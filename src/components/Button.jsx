import React from "react";
import "../style.css";

const Contentss = () => {
  return (
    <article>
      <h4 style={{ color: "black" }}>Schedule Forms</h4>
    </article>
  );
};
// const title = "2323";
const Contents = () => <h4 style={{ color: "black" }}>Onboarder Form</h4>;

const Content = () => (
  <h4 style={{ color: "black" }}>Organization Infomation Form</h4>
);
const Titile = () => {
  return <article className="title"></article>;
};

export default function Button(props) {
  return (
    <section className="wrapper">
      <button
        className="button"
        style={{ color: "#617d98", marginTop: "25rem", marginRight: "35px" }}
      >
        <Contentss />
      </button>
      <button
        className="button"
        style={{ color: "#617d98", marginTop: "25rem", marginRight: "35px" }}
      >
        <Contents />
      </button>
      <button
        className="button"
        style={{ color: "#617d98", marginTop: "25rem" }}
      >
        <Content />
      </button>
    </section>
  );
}
