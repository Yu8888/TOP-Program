import React from "react";
import "../style.css";
export default function SingleButton({ buttonText }) {
  return <button className="button">{buttonText}</button>;
}

// const props = { buttonText: "jack", age: 12 };
// const {
//   buttonText,
//   age: { jackAge = 12 },
// } = props;
// console.log(jackAge);

// const arr = ["jack", "dennis", "rose"];
// const [jackName, dennisName] = arr;
// console.log(dennisName);
