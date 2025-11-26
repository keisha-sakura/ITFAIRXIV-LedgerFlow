'use client'

import { useState } from 'react';

import AIFinancialScore from './components/AIFinancialScore';
import DaysToZero from './components/DaystoZero';
import FinancialBuffer from './components/FinancialBuffer';
import MonthlySpendingShifts from './components/MonthlySpendingShifts';
import MonthlyCashFlow from '../transaction/components/MonthlyCashFlow';
import NavBar from '../components/Navbar';

export default function AnalystPage() {
  const [selectedMonth] = useState(new Date(2025, 10, 18)); 

  const transactions = [
    { id: 1, date: '2025-11-01', type: 'expense', category: 'Food', amount: 150000, description: 'Grocery shopping' },
    { id: 2, date: '2025-11-02', type: 'expense', category: 'Transportation', amount: 50000, description: 'Fuel' },
    { id: 3, date: '2025-11-03', type: 'expense', category: 'Food', amount: 75000, description: 'Restaurant' },
    { id: 4, date: '2025-11-05', type: 'expense', category: 'Education', amount: 200000, description: 'Online course' },
    { id: 5, date: '2025-11-07', type: 'expense', category: 'Food', amount: 120000, description: 'Grocery shopping' },
    { id: 6, date: '2025-11-08', type: 'expense', category: 'Transportation', amount: 45000, description: 'Public transport' },
    { id: 7, date: '2025-11-10', type: 'expense', category: 'Food', amount: 95000, description: 'Lunch with friends' },
    { id: 8, date: '2025-11-12', type: 'expense', category: 'Transportation', amount: 60000, description: 'Taxi' },
    { id: 9, date: '2025-11-14', type: 'expense', category: 'Food', amount: 180000, description: 'Weekly groceries' },
    { id: 10, date: '2025-11-15', type: 'expense', category: 'Education', amount: 150000, description: 'Books' },
    { id: 11, date: '2025-11-16', type: 'income', category: 'Salary', amount: 5000000, description: 'Monthly salary' },
    { id: 12, date: '2025-11-17', type: 'expense', category: 'Food', amount: 85000, description: 'Coffee and snacks' },
    { id: 13, date: '2025-11-18', type: 'expense', category: 'Transportation', amount: 55000, description: 'Fuel' },
    { id: 14, date: '2025-10-05', type: 'expense', category: 'Food', amount: 500000, description: 'Monthly groceries' },
    { id: 15, date: '2025-10-10', type: 'expense', category: 'Transportation', amount: 200000, description: 'Monthly transport' },
    { id: 16, date: '2025-10-15', type: 'expense', category: 'Education', amount: 300000, description: 'Course fee' },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EF]">
        <NavBar />
        <main className="p-6">
            <h2 className="font-syne text-xl font-bold text-[#3E076C] mb-6">Financial Insight & Forecasts</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
                <MonthlyCashFlow 
                transactions={transactions}
                selectedMonth={'Nov'}
                />
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <AIFinancialScore score={78} change={-1} />
                <MonthlySpendingShifts 
                />
                <FinancialBuffer score={52} />
                <DaysToZero score={15} />
            </div>
            </div>
        </main>
    </div>
  );
}