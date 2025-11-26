export default function CurrentNetWorth({ netWorth, change, changeAmount }) {
    return (
        <div className="border-[#3E076C] border-2 px-6 py-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
            <p className="text-[#3E076C] text-lg font-syne font-bold">Current Net Worth</p>

            <p className="text-[#FFBF47] text-5xl font-syne font-semibold my-4">
                Rp{netWorth.toLocaleString('id-ID')}
            </p>

            <p className={`text-sm font-poppins flex items-center gap-1 ${change >= 0 ? 'text-[#2E8B57]' : 'text-[#DE5959]'}`}>
                {change >= 0 ? '+' : ''}Rp{changeAmount.toLocaleString('id-ID')} since last month, Keep the momentum.
            </p>
        </div>
    );
}