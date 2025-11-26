export default function AIFinancialScore() {
    return (
        <div className="border-[#3E076C] bg-[#F7F4EF] border-2 px-6 py-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
            <p className="text-[#3E076C] text-lg font-syne font-bold">Monthly Spending Shifts</p>

            <p className="text-[#3E076C] text-sm font-poppins flex items-center mb-2">
                Only display the most significant
            </p>
            <p className="text-[#3E076C] text-sm font-poppins flex items-center">
                Transportaion: +50%
            </p>
            <p className="text-[#3E076C] text-sm font-poppins flex items-center">
                Food: -20%
            </p>
        </div>
    );
}