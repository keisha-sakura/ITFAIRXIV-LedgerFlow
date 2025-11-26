import { TrendingUp, TrendingDown } from 'lucide-react';

export default function AIFinancialScore({ score, change }) {
    return (
        <div className="border-[#3E076C] bg-[#F7F4EF] border-2 px-6 py-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
            <p className="text-[#3E076C] text-lg font-syne font-bold">AI Financial Score</p>

            <p className="text-[#2E8B57] text-5xl font-syne font-bold my-4">{score}/100</p>

            <p className={`text-sm font-poppins flex items-center gap-1 ${change >= 0 ? 'text-[#2E8B57]' : 'text-[#DE5959]'}`}>
                {change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                {Math.abs(change)} point {change >= 0 ? 'increase' : 'drop'} since last month
            </p>
        </div>
    );
}
