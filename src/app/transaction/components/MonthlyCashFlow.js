import React, { useState } from 'react';

const CATEGORY_COLORS = {
  'Food': '#FFBF47',        
  'Transport': '#3E076C', 
  'Education': '#0077CC',   
  'Shopping': '#8b5cf6',
  'Entertainment': '#ec4899',
  'Health': '#10b981',
  'Other': '#6b7280'        
};

const INCOME_SPENDING_COLORS = {
  'Income': '#2E8B57',      
  'Spending': '#DE5959'
};

export const MonthlyCashFlow = ({ transactions, selectedMonth }) => {
  const [viewMode, setViewMode] = useState('detailed'); // 'detailed' or 'income-spending'

  const filteredTransactions = selectedMonth === 'all' 
    ? transactions 
    : transactions.filter(t => {
        const transactionMonth = t.date.split(' ')[1]; 
        
        if (selectedMonth === 'Sept' && (transactionMonth === 'Sep' || transactionMonth === 'Sept')) {
          return true;
        }
        if (selectedMonth === 'July' && (transactionMonth === 'Jul' || transactionMonth === 'July')) {
          return true;
        }
        
        return transactionMonth === selectedMonth;
      });

  // Detailed Spending Calculation
  const categoryTotals = filteredTransactions.reduce((acc, transaction) => {
    const category = transaction.category;
    const amount = Math.abs(parseFloat(transaction.amount.replace(/[^0-9.-]/g, '')));
    
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += amount;
    
    return acc;
  }, {});

  const totalSpending = Object.values(categoryTotals).reduce((sum, val) => sum + val, 0);

  // Income vs Spending Calculation
  const DUMMY_INCOME = 1000000; 
  
  // Calculate percentage based on income
  const spendingPercentage = (totalSpending / DUMMY_INCOME) * 100;
  const remainingPercentage = 100 - spendingPercentage;
  
  const incomeSpendingData = [
    { 
      category: 'Remaining Income', 
      amount: DUMMY_INCOME - totalSpending, 
      color: INCOME_SPENDING_COLORS['Income'],
      percentage: remainingPercentage
    },
    { 
      category: 'Spending', 
      amount: totalSpending, 
      color: INCOME_SPENDING_COLORS['Spending'],
      percentage: spendingPercentage
    }
  ];
  const totalIncomeSpending = DUMMY_INCOME;

  // Prepare data based on view mode
  const pieData = viewMode === 'detailed' 
    ? Object.entries(categoryTotals).map(([category, amount]) => ({
        category,
        amount,
        percentage: (amount / totalSpending) * 100,
        color: CATEGORY_COLORS[category] || CATEGORY_COLORS['Other']
      }))
    : incomeSpendingData;

  const CENTER = 70;
  const RADIUS = 70;
  const createPiePath = (startAngle, endAngle, radius = RADIUS) => {
    const start = polarToCartesian(CENTER, CENTER, radius, endAngle);
    const end = polarToCartesian(CENTER, CENTER, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return [
      "M", CENTER, CENTER,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ");
  };

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  let currentAngle = 0;
  const pieSlices = pieData.map(data => {
    const sliceAngle = (data.percentage / 100) * 360;
    const slice = {
      ...data,
      startAngle: currentAngle,
      endAngle: currentAngle + sliceAngle
    };
    currentAngle += sliceAngle;
    return slice;
  });

  return (
    <div className="border-[#3E076C] border-2 rounded-lg p-10 shadow-lg">
      <div className="mb-4">
        <h3 className="font-syne text-xl text-[#3E076C] font-bold text-center">
          Monthly Cash Flow
        </h3>
        <p className="font-syne text-sm text-gray-600 text-center">
          {selectedMonth === 'all' ? 'All Months' : `${selectedMonth} 2025`}
        </p>
      </div>
      
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-52 h-52">
          {pieSlices.length > 0 ? (
            <svg viewBox="0 0 140 140" className="w-full h-full">
              {pieSlices.length === 1 && pieSlices[0].percentage >= 99.999 ? (
                <circle cx={CENTER} cy={CENTER} r={RADIUS} fill={pieSlices[0].color} stroke="white" strokeWidth="1" />
              ) : (
                pieSlices.map((slice, index) => (
                  <path
                    key={index}
                    d={createPiePath(slice.startAngle, slice.endAngle)}
                    fill={slice.color}
                    stroke="white"
                    strokeWidth="1"
                  />
                ))
              )}
            </svg>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-full">
              <span className="font-syne text-gray-400 text-sm">No data for this month</span>
            </div>
          )}
        </div>
        {pieData.length > 0 && (
          <div className="grid grid-row-2 gap-2 text-xs ml-7">
            {pieData.map((data, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full flex-shrink-0" 
                  style={{ backgroundColor: data.color }}
                ></div>
                <span className="font-syne text-gray-700 truncate">
                  {data.category} ({data.percentage.toFixed(1)}%)
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {viewMode === 'detailed' && totalSpending > 0 && (
        <div className="pt-4 border-t border-gray-200">
          <div className="text-center mb-4">
            <p className="font-syne text-sm text-gray-600">Total Spending</p>
            <p className="font-syne text-lg font-semibold text-[#3E076C]">
              Rp{totalSpending.toLocaleString('id-ID')}
            </p>
          </div>

          <div className="font-poppins flex items-center justify-center gap-2 bg-[#FFBF47] rounded-lg p-1">
            <button
              onClick={() => setViewMode('income-spending')}
              className={`px-7 py-2 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'income-spending' 
                  ? 'bg-[#3E076C] text-white' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Income vs Spending
            </button>
            <button
              onClick={() => setViewMode('detailed')}
              className={`px-7 py-2 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'detailed' 
                  ? 'bg-[#3E076C] text-white' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Detailed Spending
            </button>
          </div>
        </div>
      )}

      {viewMode === 'income-spending' && (
        <div className="pt-4 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <p className="font-syne text-sm text-gray-600">Total Income</p>
              <p className="font-syne text-lg font-semibold text-gray-800">
                Rp{DUMMY_INCOME.toLocaleString('id-ID')}
              </p>
            </div>
            <div className="text-center">
              <p className="font-syne text-sm text-gray-600">Total Spending</p>
              <p className="font-syne text-lg font-semibold text-red-600">
                Rp{totalSpending.toLocaleString('id-ID')}
              </p>
            </div>
          </div>
          
          <div className="font-poppins flex items-center justify-center gap-2 bg-[#FFBF47] rounded-lg py-1">
            <button
              onClick={() => setViewMode('income-spending')}
              className={`px-10 py-2 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'income-spending' 
                  ? 'bg-[#3E076C] text-white' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Income vs Spending
            </button>
            <button
              onClick={() => setViewMode('detailed')}
              className={`px-7 py-2 rounded-lg text-xs font-semibold transition-all 
                hover:text-0_0_10px_4px_rgba
                ${
                viewMode === 'detailed' 
                  ? 'bg-[#3E076C] text-white' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Detailed Spending
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MonthlyCashFlow;