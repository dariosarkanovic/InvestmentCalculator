import React, { useState } from "react";

import Form from "./InputForm/Form";
import Table from "./Output/Table";
import Header from "./UI/Header";

function App() {
  const [result, setResult] = useState({});

  const calculateHandler = (userInput) => {
    if(userInput.length < 1){
      return;
    }

    const yearlyData = [];

    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlyContribution;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;
    let totalInvested = +currentSavings;
    let totalInterest = 0;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInvested += yearlyContribution;
      totalInterest += yearlyInterest;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(2),
        savingsEndOfYear: currentSavings.toFixed(2),
        yearlyContribution: yearlyContribution.toFixed(2),
        investedCapital: totalInvested.toFixed(2), 
        yearlyTotalInterest: totalInterest.toFixed(2),
      });
    }

    setResult(yearlyData);
  };

  return (
    <div>
      <Header/>
      <Form onSubmit={calculateHandler}/>
      <Table data={result}/>
    </div>
  );
}

export default App;
