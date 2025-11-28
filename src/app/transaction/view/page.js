'use client'
import React, { useState } from 'react';
import Navbar from "@/app/components/Navbar"
import Link from "next/link";

export default function View() {
  const [transaction, setTransaction] = useState({
    id: 1,
    status: 'Confirmed',
    description: 'Kantin Borju Labtek V',
    dateTime: 'Monday, 17 Nov 2025 11:45:36 PM',
    category: 'Food',
    amount: -25000,
    accountNumber: '****789',
    source: 'DIU BCA Digital',
    transactionHash: '0x1c3e6e8b4f2c09e72f7f8274e4c0628e938f2328a26b18d29e4e14f9f19f8c08',
    notes: ''
  });

  const [notes, setNotes] = useState(transaction.notes);
  const [category, setCategory] = useState(transaction.category);
  const [showSaved, setShowSaved] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNewCategory, setShowNewCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryBudget, setNewCategoryBudget] = useState('');
  const [categories, setCategories] = useState([
    'Food',
    'Transportation', 
    'Education',
    'Drink',
    'Hobbies'
  ]);

  const handleSave = async () => {
    setTransaction({ ...transaction, notes, category });
    setShowSaved(true);
    setTimeout(() => {
      setShowSaved(false);
    }, 2000);
  };

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      setCategories([...categories, newCategoryName.trim()]);
      setCategory(newCategoryName.trim());
      setNewCategoryName('');
      setNewCategoryBudget('');
      setShowNewCategory(false);
      setShowDropdown(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF]">
      <Navbar />

      <main className="p-6">
        <div className="flex flex-row gap-2">
            <h2 className="text-xl font-syne font-bold text-[#3E076C] mb-6 opacity-50">
                <Link href="/transaction">Transaction Flow</Link>
            </h2>
            <h2 className="text-xl font-syne font-bold text-[#3E076C] mb-6">
            ▶ Detail
            </h2>
        </div>

        <div className="font-poppins bg-[#F7F4EF] rounded-lg shadow-md border-2 border-[#3E076C] overflow-hidden p-7">
            <h3 className="text-lg font-semibold text-gray-500 mb-3">Status</h3>
            <div className="mb-5">
              <span className={`px-4 py-2 rounded-full text-sm ${
                transaction.status === 'Confirmed' 
                  ? 'bg-[#2E8B57] text-white' 
                  : transaction.status === 'Pending'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-red-600 text-white'
              }`}>
                {transaction.status}
              </span>
            </div>
          
            <h3 className="text-lg font-semibold text-gray-500 mb-2">Description</h3>
            <p className="text-lg mb-3 font-semibold">{transaction.description}</p>

            <h3 className="text-lg font-semibold text-gray-500 mb-2">Date & Time</h3>
            <p className="text-lg mb-3 font-semibold">{transaction.dateTime}</p>

            <h3 className="text-lg font-semibold text-gray-500 mb-2">Category</h3>
            <div className="text-lg mb-3 relative border-1 rounded-lg border-[#3E076C]">
              <button
                onClick={() => {
                  setShowDropdown(!showDropdown);
                  setShowNewCategory(false);
                }}
                className="bg-[#FFBF47] w-full rounded-lg py-3 px-3 text-[#3E076C] font-semibold flex justify-between items-center"
              >
                <span>{category}</span>
                <span>{showDropdown ? '▲' : '▼'}</span>
              </button>
              
              {showDropdown && !showNewCategory && (
                <div className="absolute w-full mt-1 bg-[#241838] rounded-lg overflow-hidden z-10 shadow-lg">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setCategory(cat);
                        setShowDropdown(false);
                      }}
                      className="w-full text-left px-4 py-3 text-white hover:bg-[#3E076C] transition-colors"
                    >
                      {cat}
                    </button>
                  ))}
                  <button
                    onClick={() => setShowNewCategory(true)}
                    className="w-full text-left px-4 py-3 text-white hover:bg-[#3E076C] transition-colors border-t border-gray-600"
                  >
                    + Add New Category
                  </button>
                </div>
              )}

              {showNewCategory && (
                <div className="absolute w-full mt-1 bg-[#241838] rounded-lg p-4 z-10 shadow-lg">
                  <h4 className="text-white font-semibold mb-3">New Category</h4>
                  <input
                    type="text"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    placeholder="Write your new category"
                    className="bg-[#3E076C] w-full rounded-lg py-2 px-3 text-white mb-2 focus:outline-none focus:ring-2 focus:ring-[#FFBF47] placeholder-gray-400"
                  />
                  <input
                    type="text"
                    value={newCategoryBudget}
                    onChange={(e) => setNewCategoryBudget(e.target.value)}
                    placeholder="Set your budget"
                    className="bg-[#3E076C] w-full rounded-lg py-2 px-3 text-white mb-3 focus:outline-none focus:ring-2 focus:ring-[#FFBF47] placeholder-gray-400"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setShowNewCategory(false);
                        setNewCategoryName('');
                        setNewCategoryBudget('');
                      }}
                      className="flex-1 bg-white text-[#3E076C] py-2 rounded-lg font-semibold hover:opacity-80 text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddCategory}
                      className="flex-1 bg-[#FFBF47] text-[#3E076C] py-2 rounded-lg font-semibold hover:opacity-80 text-sm"
                    >
                      Add
                    </button>
                  </div>
                </div>
              )}
            </div>

            <h3 className="text-lg font-semibold text-gray-500 mb-2">Amount</h3>
            <p className={`mb-3 text-lg font-semibold ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
              {transaction.amount < 0 ? '-' : '+'}Rp{Math.abs(transaction.amount).toLocaleString('id-ID')}
            </p>

            <h3 className="text-lg font-semibold text-gray-500 mb-2">Account Number</h3>
            <p className="mb-3 font-bold text-lg">{transaction.accountNumber}</p>

            <h3 className="text-lg font-semibold text-gray-500 mb-2">Source</h3>
            <p className="mb-3 font-bold text-lg">{transaction.source}</p>

            <h3 className="text-lg font-semibold text-gray-500 mb-2">Transaction Hash</h3>
            <p className="mb-3 text-lg font-semibold break-all">{transaction.transactionHash}</p>

            <h3 className="text-lg font-semibold text-gray-500 mb-2">Notes</h3>
            <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="bg-[#241838] w-full rounded-lg py-3 px-3 text-[#F7F4EF] focus:outline-none focus:ring-2 focus:ring-[#FFBF47]"
                placeholder="Add your personal note here"
            />

            <button 
                onClick={handleSave}
                className="bg-[#FFBF47] w-full p-3 mt-3 rounded-lg font-bold text-[#3E076C] hover:opacity-80 transition-opacity"
            >
                Save
            </button>
        </div>
      </main>

      {showSaved && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#2E8B57] text-white rounded-lg p-8 flex flex-col items-center gap-4 shadow-xl">
            <div className="w-16 h-16 bg-[#FFBF47] rounded-full flex items-center justify-center text-4xl">
              ✔
            </div>
            <p className="font-poppins text-xl font-semibold">Your changes are already saved!</p>
          </div>
        </div>
      )}

    </div>
  );
}