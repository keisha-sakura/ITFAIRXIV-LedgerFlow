'use client'

import { useState } from 'react';

function AddNewBudget({ isOpen, onClose, onAdd }) {
  const [newCategory, setNewCategory] = useState('');
  const [newBudget, setNewBudget] = useState('');

  const handleAdd = () => {
    if (newCategory && newBudget) {
      onAdd({ category: newCategory, budget: parseFloat(newBudget) });
      setNewCategory('');
      setNewBudget('');
    }
  };

  const handleCancel = () => {
    setNewCategory('');
    setNewBudget('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#F7F4EF] border-2 border-[#3E076C] h-80 rounded-2xl p-8 max-w-lg w-full shadow-2xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Add New Budget
        </h3>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Write your new category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="w-full px-4 py-3 bg-[#241838] text-[#F7F4EF] placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBF47]"
          />

          <input
            type="number"
            placeholder="Set your budget"
            value={newBudget}
            onChange={(e) => setNewBudget(e.target.value)}
            className="w-full px-4 py-3 bg-[#241838] text-[#F7F4EF] placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBF47]"
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleCancel}
            className="flex-1 px-6 py-3 border-2 border-[#FFBF47] text-[#3E076C] font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="flex-1 px-6 py-3 bg-[#FFBF47] text-[#3E076C] font-semibold rounded-lg hover:bg-[#FFD073] transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNewBudget;