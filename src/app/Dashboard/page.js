"use client";
import { useState } from "react";

import Navbar from "@/app/components/Navbar";
import Header from "./components/Header";
import CurrentNetWorth from "./components/CurrentNetWorth";
import AIFinancialScore from "./components/AIFinancialScore";
import RecentTransaction from "./components/RecentTransaction";
import MonthlyBudgetFlow from "./components/MonthlyBudgetFlow";
import dashboardData from "./dashboardData";
import transactionsData from "../transaction/transactionsData";

export default function DashboardPage() {
 
  const [dashboardState, setDashboardState] = useState({
    ...dashboardData,
  });

  return (
    <div className="min-h-screen bg-[#F7F4EF]">
      <Navbar />

      <Header userName={dashboardState.userName} />

      <div className="max-w-5xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <CurrentNetWorth
            netWorth={dashboardState.netWorth}
            change={dashboardState.netWorthChangePercent}
            changeAmount={dashboardState.netWorthChange}
          />
          <AIFinancialScore
            score={dashboardState.aiScore}
            change={dashboardState.aiScoreChange}
          />
        </div>

        <div className="mb-8">
          <RecentTransaction
            transactions={getLatestTransactions(transactionsData, 3)}
          />
        </div>

        <div className="mb-8">
          <MonthlyBudgetFlow budgetData={dashboardState.budgetFlow} />
        </div>
      </div>
    </div>
  );
}

function parseTransactionDate(dateStr) {
  if (!dateStr) return new Date(0);
  const parts = String(dateStr).replace(",", "").split(" ").filter(Boolean);

  let day = parseInt(parts[0], 10);
  let monthToken = parts[1] || "";
  let year = parseInt(parts[2] || parts[parts.length - 1], 10);

  const key = monthToken.toLowerCase().replace(/[^a-z]/g, "");
  const map = {
    jan: 0,
    january: 0,
    feb: 1,
    february: 1,
    mar: 2,
    march: 2,
    apr: 3,
    april: 3,
    may: 4,
    jun: 5,
    june: 5,
    jul: 6,
    july: 6,
    aug: 7,
    august: 7,
    sep: 8,
    sept: 8,
    september: 8,
    oct: 9,
    october: 9,
    nov: 10,
    november: 10,
    dec: 11,
    december: 11,
  };

  const monthIndex = map[key] ?? 0;
  if (Number.isNaN(day)) day = 1;
  if (Number.isNaN(year)) year = new Date().getFullYear();
  return new Date(year, monthIndex, day);
}

function getLatestTransactions(allTransactions, count = 3) {
  if (!Array.isArray(allTransactions)) return [];
  const sorted = allTransactions
    .slice()
    .sort(
      (a, b) => parseTransactionDate(b.date) - parseTransactionDate(a.date)
    );
  return sorted.slice(0, count);
}
