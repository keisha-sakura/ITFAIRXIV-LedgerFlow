export default function AIFinancialScore() {
    return (
        <div className="border-[#3E076C] bg-[#F7F4EF] border-2 px-6 py-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
            <p className="text-[#3E076C] text-lg font-syne font-bold">Monthly Spending Shifts</p>

            <p className="text-[#3E076C] text-sm font-poppins flex items-center mb-2">
                Only display the most significant
            </p>

            <p className="text-[#3E076C] text-md font-poppins flex items-center">
                Transportation: <span className="font-bold font-syne text-[#3E076C] text-2xl ml-2">+50%</span>
            </p>
            <p className="text-[#3E076C] text-md font-poppins flex items-center">
                Food: <span className="font-bold font-syne text-[#3E076C] text-2xl ml-2">-20%</span>
            </p>
        </div>
    );
}