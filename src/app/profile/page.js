'use client';

import { useState } from 'react';
import { ChevronRight, ChevronDown, Bell, Plus } from 'lucide-react';
import Navbar from "@/app/components/Navbar";


export default function LedgerFlowProfile() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [financialDataExpanded, setFinancialDataExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F4EF]">
      <Navbar />

      <main className="p-6">
        <h2 className="text-xl font-syne font-bold text-[#3E076C] mb-6">
          Profile
        </h2>

        <div className="font-poppins bg-[#F7F4EF] rounded-lg shadow-md border-2 border-[#3E076C] overflow-hidden p-7">
          <div className="flex items-center justify-between font-bold transition-colors cursor-pointer mb-7">
            <span className="text-lg text-[#241838]">Name</span>
            <div className="flex items-center gap-3">
              <span className="text-lg text-[#3E076C]">Keikei</span>
              <ChevronRight className="w-5 h-5 text-[#3E076C]" />
            </div>
          </div>

          <div className="flex items-center justify-between font-bold transition-colors cursor-pointer mb-7">
            <span className="text-lg text-[#241838]">Email</span>
            <div className="flex items-center gap-3">
              <span className="text-lg text-[#3E076C]">Keikei@gmail.com</span>
              <ChevronRight className="w-5 h-5 text-[#3E076C]" />
            </div>
          </div>

          <div className="flex items-center justify-between font-bold transition-colors cursor-pointer mb-7">
            <span className="text-lg text-[#241838]">Phone Number</span>
            <div className="flex items-center gap-3">
              <span className="text-lg text-[#3E076C]">***********10</span>
              <ChevronRight className="w-5 h-5 text-[#3E076C]" />
            </div>
          </div>

          <div className="flex items-center justify-between font-bold transition-colors cursor-pointer mb-7">
            <span className="text-lg text-[#241838]">Active Session</span>
            <div className="flex items-center gap-3">
              <ChevronRight className="w-5 h-5 text-[#3E076C]" />
            </div>
          </div>

          <div className="flex items-center justify-between font-bold transition-colors cursor-pointer mb-7">
            <span className="text-lg text-[#241838]">Change Password</span>
            <div className="flex items-center gap-3">
              <ChevronRight className="w-5 h-5 text-[#3E076C]" />
            </div>
          </div>

          {/* Financial Data */}
          <div>
            <div 
              className="flex items-center justify-between font-bold transition-colors cursor-pointer"
              onClick={() => setFinancialDataExpanded(!financialDataExpanded)}
            >
              <span className="text-lg text-[#241838]">Financial Data</span>
              {financialDataExpanded ? (
                <ChevronDown className="w-5 h-5 text-[#3E076C]" />
              ) : (
                <ChevronRight className="w-5 h-5 text-[#3E076C]" />
              )}
            </div>

            {financialDataExpanded && (
              <div className="pl-5">
                <div>
                  <h3 className="text-lg font-semibold text-gray-500 mt-4">Credit Cards</h3>
                  
                  <div className="flex items-center justify-between py-4">
                    <span className="text-lg font-semibold text-[#241838]">
                      blu BCA Digital (*******78)
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-lg text-[#2E8B57] font-semibold">last sync 10 hours ago</span>
                      <button className="text-lg text-[#0077CC] font-semibold underline">
                        manage
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <span className="text-lg font-semibold text-[#241838]">
                      BNI (*******90)
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-lg text-[#2E8B57] font-bold">last sync 2 hours ago</span>
                      <button className="text-lg text-[#0077CC] font-bold underline">
                        manage
                      </button>
                    </div>
                  </div>

                  <button className="flex items-center gap-3 py-4 text-gray-900 hover:text-purple-900 transition-colors">
                    <div className="w-6 h-6 border-2 border-gray-900 rounded flex items-center justify-center">
                      <Plus className="w-7 h-7" />
                    </div>
                    <span className="text-lg text-[#241838] font-semibold">Connect New Card</span>
                  </button>
                </div>

                <div className="w-full border-b border-gray-400" />

                <div>
                  <h3 className="text-lg font-semibold text-gray-500 mt-4">E-Wallet</h3>
                  
                  <div className="flex items-center justify-between py-4">
                    <span className="text-lg font-semibold text-[#241838]">
                      Gopay (***********10)
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-lg text-[#2E8B57] font-semibold">last sync 10 hours ago</span>
                      <button className="text-lg text-[#0077CC] font-semibold underline">
                        manage
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <span className="text-lg font-semibold text-[#241838]">
                      ShopeePay (***********10)
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-lg text-[#2E8B57] font-bold">last sync 2 hours ago</span>
                      <button className="text-lg text-[#0077CC] font-bold underline">
                        manage
                      </button>
                    </div>
                  </div>

                  <button className="flex items-center gap-3 py-4 text-gray-900 hover:text-purple-900 transition-colors">
                    <div className="w-6 h-6 border-2 border-gray-900 rounded flex items-center justify-center">
                      <Plus className="w-7 h-7" />
                    </div>
                    <span className="text-lg text-[#241838] font-semibold">Connect New Card</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}