import React from "react";
import Line from "./Line";
import styles from "./Table.module.css";

const Table = (props) => {

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.length > 0 &&
          props.data.map((line) => (
            <Line
              key={line.year}
              year={line.year}
              yearlyInterest={line.yearlyInterest}
              savingsEndOfYear={line.savingsEndOfYear}
              yearlyContribution={line.yearlyContribution}
              invested={line.investedCapital}
              totalInterest={line.yearlyTotalInterest}
            />
          ))}
      </tbody>
    </table>
  );
};

export default Table;
