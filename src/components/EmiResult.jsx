
export default function EmiReasult({ calcutateData }) {
    return (
        <div className="flex flex-col gap-6 xl:px-5 sm:px-3.5 sm:py-0 py-3 flex-[197px] relative z-10">
            <h1 className="text-2xl font-bold mb-3">Calculated EMI</h1>

            <ResultBox amount={calcutateData.LoneAmount}>
                Lone EMI
            </ResultBox>


            <ResultBox amount={calcutateData.TotalIntPayble}>
                Total Interest Payble
            </ResultBox>

            <ResultBox amount={calcutateData.TotalPayment}>
                Total Payment(Principal + Interest)
            </ResultBox>

        </div>
    )
}


function ResultBox({ children, amount }) {
    return (
        <div className="border border-gray-300 shadow p-5 rounded-lg sm:max-w-[300px] backdrop-blur-sm">
            <h2 className="font-bold text-2xl text-pink-600 mb-2">{amount}</h2>
            <h3 className="font-bold text-xs tracking-wide">
                {children}
            </h3>
        </div>
    )
}