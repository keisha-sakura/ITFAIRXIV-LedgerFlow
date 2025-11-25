import React from 'react';

const CATEGORY_COLORS = {
  'Food': '#FFBF47',        
  'Transport': '#3E076C', 
  'Education': '#0077CC',   
  'Shopping': '#8b5cf6',
  'Entertainment': '#ec4899',
  'Health': '#10b981',
  'Other': '#6b7280'        
};

export const MonthlyCashFlow = ({ transactions, selectedMonth }) => {
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

  const pieData = Object.entries(categoryTotals).map(([category, amount]) => ({
    category,
    amount,
    percentage: (amount / totalSpending) * 100,
    color: CATEGORY_COLORS[category] || CATEGORY_COLORS['Other']
  }));

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
      <h3 className="font-syne text-xl text-[#3E076C] font-bold flex items-center justify-center mb-2">
        Monthly Cash Flow
      </h3>
      <p className="font-syne text-sm text-gray-600 text-center mb-4">
        {selectedMonth === 'all' ? 'All Months' : `${selectedMonth} 2025`}
      </p>
      
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
      
      {totalSpending > 0 && (
        <div className="pt-4 border-t border-gray-200 text-center">
          <p className="font-syne text-sm text-gray-600">Total Spending</p>
          <p className="font-syne text-lg font-semibold text-[#3E076C]">
            Rp{totalSpending.toLocaleString('id-ID')}.000
          </p>
        </div>
      )}
    </div>
  );
};

export default MonthlyCashFlow;