'use client'

import React, { useState } from 'react';
import MonthlyCashFlow from './components/MonthlyCashFlow';
import MonthSelector from './components/MonthSelector';
import RecentTransactions from './components/RecentTransactions';
import NavBar from '../components/Navbar';
import CurrentNetWorth from '../dashboard/components/CurrentNetWorth';
import dashboardData from '../dashboard/dashboardData';
import transactionsData from './transactionsData';


const TransactionFlowPage = () => {
  const [selectedMonth, setSelectedMonth] = useState('Nov');

  return (
    <>
      <div className="min-h-screen bg-[#F7F4EF]">
        <NavBar />

        <div className="p-6">
          <h1 className="font-syne text-xl font-bold text-[#3E076C] mb-6">Transaction Flow</h1>

          <div className="flex flew-row items-center justify-center gap-6 mb-6">
            <div className="text-center w-lg">
              <CurrentNetWorth
                netWorth={dashboardData.netWorth}
                change={dashboardData.netWorthChangePercent}
                changeAmount={dashboardData.netWorthChange}
              />
            </div>

            <MonthlyCashFlow
              transactions={transactionsData}
              selectedMonth={selectedMonth}
            />
          </div>

          <MonthSelector
            selectedMonth={selectedMonth}
            onMonthChange={setSelectedMonth}
          />

          <RecentTransactions
            transactions={transactionsData}
            selectedMonth={selectedMonth}
          />
        </div>
      </div>
    </>
  );
};

export default TransactionFlowPage;