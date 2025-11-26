
export default function AIFinancialScore({ score }) {
    return (
        <div className="border-[#3E076C] bg-[#F7F4EF] border-2 px-6 py-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
            <p className="text-[#3E076C] text-lg font-syne font-bold">Financial Buffer</p>

            <p className="text-[#3E076C] text-sm font-poppins flex items-center">
                Based on your current spending rate, your funds are projected to last
            </p>

            <p className="text-[#2E8B57] text-[#2E8B57] text-5xl font-syne font-bold my-4">{score} days</p>
        </div>
    );
}