'use client'
import { useState } from "react";

import BudgetingList from "./components/BudgetingList";
import AddNewBudget from "./components/AddNewBudget";
import NavBar from "../components/Navbar"


export default function budgeting() {
    const [dashboardData, setDashboardData] = useState({
            userName: "Kiwi",
            netWorth: 15000000,
            netWorthChange: 1000000,
            netWorthChangePercent: 7.14,
            aiScore: 78,
            aiScoreChange: -1,
            budgetFlow: [
            {
                category: "Food",
                spent: 12000000,
                budget: 2000000
            },
            {
                category: "Transportation",
                spent: 50000,
                budget: 600000
            }
            ]
        });
        const [isAddOpen, setIsAddOpen] = useState(false);

        const handleAddBudget = ({ category, budget }) => {
            setDashboardData(prev => ({
                ...prev,
                budgetFlow: [
                    ...prev.budgetFlow,
                    { category, budget: Number(budget), spent: 0 }
                ]
            }));
            setIsAddOpen(false);
        };
    return(
        <>
            <NavBar />

            <div className="p-8">
                <p className="font-syne text-[#3E076C] text-xl font-bold mb-5">Budgeting</p>
                <BudgetingList budgetData={dashboardData.budgetFlow} />
            </div>
            <button 
                className="fixed bottom-8 right-8 h-16 w-16 text-4xl bg-[#3E076C] rounded-full text-white shadow-lg hover:bg-[#5A0A9E] transition-all duration-200 hover:scale-110 z-50"
                onClick={() => setIsAddOpen(true)}
            >
                +
            </button>

            <AddNewBudget isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} onAdd={handleAddBudget} />
        </>
    );
}