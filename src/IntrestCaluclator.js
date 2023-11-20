import IntrestForm from "./Components/Card/IntrestForm";

export default function IntrestCaluclator(props){

    const calculateHandler = (userInput) => {

        const yearlyData = []; // per-year results
    
        let currentSavings = userInput.currentSavings; 
        const yearlyContribution = userInput.yearlyContribution;
        const expectedReturn = userInput.expectedInterest / 100;
        const duration = userInput.investmentDuration;
    
        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
          const yearlyInterest = currentSavings * expectedReturn;
          currentSavings += yearlyInterest + yearlyContribution;
          yearlyData.push({

            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution,
            initialInvestment : userInput.currentSavings

          });
        } 
    
        props.onCaluclation(yearlyData);

      };

    return (
        <div>
            <IntrestForm onGetData = {calculateHandler} onReset = {props.onReset}/>
        </div>
    );
}