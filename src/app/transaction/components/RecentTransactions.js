import React from 'react';

export const RecentTransactions = ({ transactions, selectedMonth }) => {
  const filteredTransactions = selectedMonth === 'all' 
    ? transactions 
    : transactions.filter(t => {
        const transactionMonth = t.date.split(' ')[1]; 
        return transactionMonth === selectedMonth || 
               (selectedMonth === 'Sept' && transactionMonth === 'Sep');
      });

  return (
    <div className="border-2 border-[#3E076C] rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-syne text-[#3E076C] font-semibold">Recent Transactions</h3>
        <span className="font-syne text-sm text-gray-600">
          {selectedMonth === 'all' ? 'All Months' : `${selectedMonth} 2025`}
        </span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="font-syne text-left py-3 px-2 text-gray-600 font-medium">Status</th>
              <th className="font-syne text-left py-3 px-2 text-gray-600 font-medium">Description</th>
              <th className="font-syne text-left py-3 px-2 text-gray-600 font-medium">Date</th>
              <th className="font-syne text-left py-3 px-2 text-gray-600 font-medium">Category</th>
              <th className="font-syne text-left py-3 px-2 text-gray-600 font-medium">Amount</th>
              <th className="font-syne text-left py-3 px-2 text-gray-600 font-medium">Source</th>
              <th className="font-syne text-left py-3 px-2 text-gray-600 font-medium">Proof ID</th>
              <th className="font-syne text-left py-3 px-2 text-gray-600 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-2">
                    <span
                      className={`font-syne px-3 py-1 rounded-full text-xs font-medium ${
                        transaction.status === 'Confirmed'
                          ? 'bg-green-500 text-white'
                          : 'bg-[#FFBF47] text-[#3E076C]'
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td className="font-syne py-3 px-2 text-gray-700">{transaction.description}</td>
                  <td className="font-syne py-3 px-2 text-gray-700">{transaction.date}</td>
                  <td className="font-syne py-3 px-2 text-gray-700">{transaction.category}</td>
                  <td className="font-syne py-3 px-2 text-gray-700">{transaction.amount}</td>
                  <td className="font-syne py-3 px-2 text-gray-700">{transaction.source}</td>
                  <td className="font-syne py-3 px-2 text-gray-700">{transaction.proofId}</td>
                  <td className="py-3 px-2">
                    <button className="font-syne text-blue-500 hover:text-blue-700 text-xs font-medium">
                      view
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="font-syne py-8 text-center text-gray-400">
                  No transactions found for this month
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;