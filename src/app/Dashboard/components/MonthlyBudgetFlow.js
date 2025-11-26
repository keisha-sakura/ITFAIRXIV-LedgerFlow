import { ShoppingCart, Car, Home, Smartphone, DollarSign } from 'lucide-react';

export default function MonthlyBudgetFlow({ budgetData }) {
  const getPercentage = (spent, budget) => {
    return (spent / budget) * 100;
  };

  const getCategoryIcon = (category) => {
    switch(category.toLowerCase()) {
      case 'food': return <ShoppingCart size={20} />;
      case 'transportation': return <Car size={20} />;
      case 'housing': return <Home size={20} />;
      case 'utilities': return <Smartphone size={20} />;
      default: return <DollarSign size={20} />;
    }
  };

  return (
    <div className="border-[#3E076C] border-2 px-6 py-5 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <p className="text-[#3E076C] text-xl font-syne font-bold">Your Monthly Budget Flow</p>
        <button className="text-[#3E076C] font-poppins font-semibold hover:text-[#FFBF47] transition">
          View All
        </button>
      </div>

      <div className="space-y-6">
        {budgetData.map((item, index) => {
          const percentage = getPercentage(item.spent, item.budget);
          const isOverBudget = percentage > 100;
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-[#3E076C]">{getCategoryIcon(item.category)}</span>
                  <span className="font-syne font-semibold text-[#3E076C]">{item.category}</span>
                </div>
                <span className="font-poppins text-sm text-gray-600">
                  Rp{item.spent.toLocaleString('id-ID')}/Rp{item.budget.toLocaleString('id-ID')}
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="flex h-full">
                  <div 
                    className="bg-[#FFBF47] h-full transition-all duration-500"
                    style={{ width: `${Math.min(percentage, 70)}%` }}
                  ></div>
                  <div 
                    className={`h-full transition-all duration-500 ${isOverBudget ? 'bg-[#DE5959]' : 'bg-[#2E8B57]'}`}
                    style={{ width: `${Math.max(0, Math.min(percentage - 70, 30))}%` }}
                  ></div>
                </div>
              </div>
              
              {isOverBudget && (
                <p className="text-xs text-[#DE5959] font-poppins">
                  ⚠️ Over budget by Rp{(item.spent - item.budget).toLocaleString('id-ID')}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}