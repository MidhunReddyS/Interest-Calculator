import { useState } from "react";
import IntrestCaluclator from "../IntrestCaluclator";
import "./ResultTable.css"
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });


export default function ResultTable() {

  const [result, setResult] = useState(
    <tr>
      <td>YEAR NUMBER</td>
      <td>TOTAL SAVINGS END OF YEAR</td>
      <td>INTEREST GAINED IN YEAR</td>
      <td>TOTAL INTEREST GAINED</td>
      <td>TOTAL INVESTED CAPITAL</td>
    </tr>
  );

  function getResult(event) {
    setResult(event.map((data) => 
      <tr key = {data.year}>
        <td>{data.year}</td>
        <td>{formatter.format(data.savingsEndOfYear)}</td>
        <td>{formatter.format(data.yearlyInterest)}</td>
        <td>{formatter.format(data.savingsEndOfYear-data.initialInvestment-data.yearlyContribution*data.year)}</td>
        <td>{formatter.format(data.initialInvestment+data.yearlyContribution*data.year)}</td>
      </tr>
    ))
  }

  function resetHandler() {
    setResult(
      <tr>
        <td>YEAR NUMBER</td>
        <td>TOTAL SAVINGS END OF YEAR</td>
        <td>INTEREST GAINED IN YEAR</td>
        <td>TOTAL INTEREST GAINED</td>
        <td>TOTAL INVESTED CAPITAL</td>
      </tr>
    )
  }

  return (
    <div>
      <IntrestCaluclator onCaluclation={getResult} onReset={resetHandler} />
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead> 
        <tbody>{result}</tbody> 
      </table>
    </div>
  );
}
