import { useState } from 'react';
import EmiReasult from "./components/EmiResult";
import EmiSelection from "./components/EmiSelection";

function EmiCalculaorApp() {
  const initionData = { LoneAmount: 0, TotalIntPayble: 0, TotalPayment: 0 }
  const [calculatedData, setCalculatedData] = useState(initionData);
  const [error, setError] = useState(false)

  function handelCalculation(value) {

    const P = parseInt(value.loneAmount);
    const n = parseInt(value.tenure * 12);
    const R = parseFloat(value.rate / (12 * 100));

    const emi = (P * R * Math.pow(1 + R, n)) / (Math.pow(1 + R, n) - 1);
    const totalPayment = emi * n;
    const totalIntPayble = totalPayment - P;


    if (P > 0 && R > 0) {
      setCalculatedData({
        ...calculatedData,
        LoneAmount: Math.round(emi),
        TotalPayment: Math.round(totalPayment),
        TotalIntPayble: Math.round(totalIntPayble),
      })
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <>
      <div className="container px-4">
        <div className="p-5 py-6 flex flex-wrap my-10 relative main-calculator-div">
          <EmiSelection onClick={handelCalculation} onError={error} />

          <EmiReasult calcutateData={calculatedData} />
        </div>
      </div>
    </>
  );
}

export default EmiCalculaorApp;
