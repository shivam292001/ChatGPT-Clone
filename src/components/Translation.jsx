import React from "react";

export default function Translation({ answer, setInput, result }) {
  return (
    <div>
      <h2>WRITE INPUT</h2>
      <textarea
        className="text-area"
        cols={80}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <br />
      <button className="action-btn" onClick={answer}>
        Get Answer
      </button>
      <br />
      <h2>OUTPUT</h2>
      <h2 className="result-text">{result.length > 0 ? result : ""}</h2>
    </div>
  );
}
