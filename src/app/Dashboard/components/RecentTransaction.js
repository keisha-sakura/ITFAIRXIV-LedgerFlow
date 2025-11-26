export default function RecentTransaction({ transactions }) {
  return (
    <div className="border-[#3E076C] border-2 px-6 py-5 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <p className="text-[#3E076C] text-xl font-syne font-bold">Recent Transactions</p>
        <button className="text-[#3E076C] font-poppins font-semibold hover:text-[#FFBF47] transition">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 px-2 font-poppins text-sm text-gray-600">Status</th>
              <th className="text-left py-2 px-2 font-poppins text-sm text-gray-600">Description</th>
              <th className="text-left py-2 px-2 font-poppins text-sm text-gray-600">Date</th>
              <th className="text-left py-2 px-2 font-poppins text-sm text-gray-600">Category</th>
              <th className="text-right py-2 px-2 font-poppins text-sm text-gray-600">Amount</th>
              <th className="text-left py-2 px-2 font-poppins text-sm text-gray-600">Source</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    transaction.status === 'Confirmed' 
                      ? 'bg-[#2E8B57] text-white' 
                      : 'bg-[#FFBF47] text-[#241838]'
                  }`}>
                    {transaction.status}
                  </span>
                </td>
                <td className="py-3 px-2 font-poppins text-sm">{transaction.description}</td>
                <td className="py-3 px-2 font-poppins text-sm text-gray-600">{transaction.date}</td>
                <td className="py-3 px-2 font-poppins text-sm">{transaction.category}</td>
                <td className="py-3 px-2 font-poppins text-sm text-right font-semibold">
                  Rp{transaction.amount.toLocaleString('id-ID')}
                </td>
                <td className="py-3 px-2 font-poppins text-sm text-gray-600">{transaction.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 

