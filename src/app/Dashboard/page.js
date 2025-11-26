'use client'

import { useState } from "react";

import Navbar from "@/app/components/Navbar";
import Header from "./components/Header";
import CurrentNetWorth from "./components/CurrentNetWorth";
import AIFinancialScore from "./components/AIFinancialScore";
import RecentTransaction from "./components/RecentTransaction";
import MonthlyBudgetFlow from "./components/MonthlyBudgetFlow";

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState({
    userName: "Kiwi",
    netWorth: 15000000,
    netWorthChange: 1000000,
    netWorthChangePercent: 7.14,
    aiScore: 78,
    aiScoreChange: -1,
    transactions: [
      {
        status: "Confirmed",
        description: "Kantin Boga Labtek V",
        date: "17 Nov 2025",
        category: "Food",
        amount: 25000,
        source: "BNI BCA Digital"
      },
      {
        status: "Pending",
        description: "Kantin OG Barat",
        date: "18 Nov 2025",
        category: "Food",
        amount: 20000,
        source: "BNI"
      }
    ],
    budgetFlow: [
      {
        category: "Food",
        spent: 150000,
        budget: 2000000
      },
      {
        category: "Transportation",
        spent: 50000,
        budget: 600000
      }
    ]
  });

  return (
    <div className="min-h-screen bg-[#F7F4EF]">
      <Navbar />
      
      <Header userName={dashboardData.userName} />
      
      <div className="max-w-5xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <CurrentNetWorth 
            netWorth={dashboardData.netWorth}
            change={dashboardData.netWorthChangePercent}
            changeAmount={dashboardData.netWorthChange}
          />
          <AIFinancialScore 
            score={dashboardData.aiScore}
            change={dashboardData.aiScoreChange}
          />
        </div>

        <div className="mb-8">
          <RecentTransaction transactions={dashboardData.transactions} />
        </div>

        <div className="mb-8">
          <MonthlyBudgetFlow budgetData={dashboardData.budgetFlow} />
        </div>
      </div>
    </div>
  );
}