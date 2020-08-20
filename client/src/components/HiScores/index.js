import React, { useState } from "react";

export const HiScores = () => {
  const [scores, setScores] = useState([
    { initials: "AK", time: "2.33", numOfCards: 24 },
    { initials: "MA", time: "3.33", numOfCards: 15 },
  ]);

  const renderTableRows = () => {
    return scores.map(({ initials, time, numOfCards }, i) => (
      <tr key={i}>
        <td>{initials}</td>
        <td>{time}</td>
        <td>{numOfCards}</td>
      </tr>
    ));
  };



  return (
    <table>
      <thead>High Scores</thead>
      <tbody>{renderTableRows()}</tbody>
    </table>
  );
};
