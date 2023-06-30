import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
    const [currentSavings, setCurrentSavings] = useState("");
    const [yearlyContribution, setYearlyContribution] = useState("");
    const [expectedReturn, setExpectedReturn] = useState("");
    const [duration, setDuration] = useState("");

    const currentSavingsHandler = (event) => {
        setCurrentSavings(event.target.value);
    }

    const yearlyContributionHandler = (event) => {
        setYearlyContribution(event.target.value);
    }

    const expectedReturnHandler = (event) => {
        setExpectedReturn(event.target.value);
    }

    const durationHandler = (event) => {
        setDuration(event.target.value);
    }

    const clickHandler = () => {

        setCurrentSavings("");
        setYearlyContribution("");
        setExpectedReturn("");
        setDuration("");

        props.onSubmit({});
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const userInput = {
            currentSavings: currentSavings,
            yearlyContribution: yearlyContribution,
            expectedReturn: expectedReturn,
            duration: duration,
        }

        props.onSubmit(userInput);
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" value={currentSavings} onChange={currentSavingsHandler}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value={yearlyContribution} onChange={yearlyContributionHandler}/>
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" value={expectedReturn} onChange={expectedReturnHandler}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={duration} onChange={durationHandler}/>
          </p>
        </div>
        <p className={styles.actions}>
          <button type="reset" className={styles.buttonAlt} onClick={clickHandler}>
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    )
}

export default Form;