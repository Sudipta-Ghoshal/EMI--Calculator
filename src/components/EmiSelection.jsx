
import { useState } from 'react';

export default function EmiSelection({ onClick, onError }) {
    const [value, setValue] = useState({
        loneAmount: 0,
        rate: 0,
        tenure: 1
    });

    function handleChange(e) {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }


    return (
        <div
            className="flex flex-col gap-6 items-start xl:px-5 sm:px-3.5 sm:py-0 py-3 sm:border-r border-b sm:border-b-0 border-gray-200 flex-[365px] relative z-10">
            <h1 className="text-2xl font-bold mb-3">EMI Calculator</h1>

            <div className="w-full">
                <label htmlFor="loneAmount" className="flex justify-between mb-2">
                    <span className="font-semibold">Loan Amount <span className="text-pink-600 font-bold text-xl">*</span>
                    </span>
                    <span className="font-semibold">₹{value.loneAmount}</span>
                </label>
                <input type="range" onChange={handleChange} min="0" max="500000" name='loneAmount' title="loneAmount" className="w-full slider" value={value.loneAmount} />
            </div>

            <div className="w-full">
                <label htmlFor="loneAmount" className="flex justify-between mb-2">
                    <span className="font-semibold">Interest Rate / Year <span className="text-pink-600 font-bold text-xl">*</span></span>
                    <span className="font-semibold">{value.rate}%</span>
                </label>
                <input type="range" onChange={handleChange} min="0" max="18" name='rate' title="rate" className="w-full slider" value={value.rate} />
            </div>

            <div className="w-full">
                <label htmlFor="loneAmount" className="flex justify-between mb-2">
                    <span className="font-semibold">Tenure(Year)</span>
                    <span className="font-semibold">{value.tenure}</span>
                </label>
                <input type="range" onChange={handleChange} min="1" max="20" name='tenure' title="tenure" className="w-full slider" value={value.tenure} />
            </div>

            {onError ? (<span className="text-red-600 font-bold shaking">Loan amount and Interest Rate must be getter than zero</span>) : ""}

            <button type="button" title="calculate"
                className="px-6 bg-pink-600 hover:px-8 hover:bg-pink-700 transition-all rounded-lg py-2 text-white font-semibold cursor-pointer drop-shadow-md"
                onClick={() => onClick(value)}
            >
                Calculate
            </button>
        </div>
    )
}

