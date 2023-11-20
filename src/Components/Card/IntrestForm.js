import {useState} from 'react'
import "./IntrestForm.css"

export default function IntrestForm(props){
    const [currentSavings, setCurrentSavings] = useState("10001");
    const [yearlySavings, setYearlySavings] = useState("1200");
    const [expectedInterest, setExpectedInterest] = useState("7");
    const [investmentDuration, setInvestmentDuration] = useState("10");
    
    function formSubmition(event, id){
        if(id === "current-savings"){setCurrentSavings(event.target.value)}
        else if(id === "yearly-contribution"){setYearlySavings(event.target.value)}
        else if(id === "expected-return"){setExpectedInterest(event.target.value)}
        else if(id === "duration"){setInvestmentDuration(event.target.value)}      
    }
    
    function onSubmission(event){
        event.preventDefault();
        const submittedData = {
            currentSavings: +currentSavings,
            yearlyContribution: +yearlySavings,
            expectedInterest: +expectedInterest,
            investmentDuration: +investmentDuration
        }
        
        props.onGetData(submittedData);
        
        setCurrentSavings("10000");
        setYearlySavings("1200");
        setExpectedInterest("7");
        setInvestmentDuration("10");
    }

    function restHandler() { 
      props.onReset()
      setCurrentSavings("10000");
      setYearlySavings("1200");
      setExpectedInterest("7");
      setInvestmentDuration("10");
     }

    return (
        <form className="form" onSubmit={onSubmission}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" value={currentSavings} onChange={(event) => formSubmition(event, "current-savings")}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value={yearlySavings}  onChange={(event) => formSubmition(event, "yearly-contribution")}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" value={expectedInterest} onChange={(event) => formSubmition(event, "expected-return")}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={investmentDuration} onChange={(event) => formSubmition(event, "duration")}/>
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={restHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    );
}
