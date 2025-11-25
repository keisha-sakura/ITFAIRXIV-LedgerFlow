import React from 'react';

export const MonthSelector = ({ selectedMonth, onMonthChange }) => {
  const months = [
    { name: 'All', value: 'all' },
    { name: 'Jan', value: 'Jan' },
    { name: 'Feb', value: 'Feb' },
    { name: 'Mar', value: 'Mar' },
    { name: 'Apr', value: 'Apr' },
    { name: 'May', value: 'May' },
    { name: 'Jun', value: 'Jun' },
    { name: 'Jul', value: 'July' },  
    { name: 'Aug', value: 'Aug' },
    { name: 'Sep', value: 'Sept' },  
    { name: 'Oct', value: 'Oct' },
    { name: 'Nov', value: 'Nov' },
    { name: 'Dec', value: 'Dec' },
  ];

  return (
    <div className="grid grid-cols-13 gap-2 w-full mb-4">
        {months.map((month) => (
            <button
            key={month.value}
            onClick={() => onMonthChange(month.value)}
            className={`font-syne w-full px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                selectedMonth === month.value
                ? 'bg-[#FFBF47] text-[#3E076C]'
                : `bg-[#F7F4EF] border border-[#FFBF47] text-[#3E076C] hover:bg-[rgba(255,181,71,0.5)]`
            }`}
            >
            {month.name}
            </button>
        ))}
    </div>
  );
};

export default MonthSelector;