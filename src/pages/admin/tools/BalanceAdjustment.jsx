import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDollarSign, FiPlus, FiMinus, FiSearch } from 'react-icons/fi';

export default function BalanceAdjustment() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('add'); // 'add' or 'subtract'
  const [reason, setReason] = useState('');

  const handleAdjustBalance = () => {
    if (!selectedUser || !amount || !reason) return;
    
    // In a real app, this would make an API call
    console.log('Adjusting balance:', {
      userId: selectedUser.id,
      amount,
      type,
      reason
    });
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-semibold mb-6">Balance Adjustment</h2>
        
        {/* Search User */}
        <div className="mb-6">
          <div className="relative">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search user by name or ID..."
              className="pl-10 w-full p-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Adjustment Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Adjustment Type
            </label>
            <div className="flex space-x-4">
              <button
                onClick={() => setType('add')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  type === 'add'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <FiPlus className="mr-2" />
                Add Balance
              </button>
              <button
                onClick={() => setType('subtract')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  type === 'subtract'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <FiMinus className="mr-2" />
                Subtract Balance
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount
            </label>
            <div className="relative">
              <FiDollarSign className="absolute left-3 top-3 text-gray-400" />
              <input
                type="number"
                className="pl-10 w-full p-2 border rounded-lg"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reason
            </label>
            <textarea
              className="w-full p-2 border rounded-lg"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Enter reason for adjustment"
              rows={3}
            />
          </div>

          <button
            onClick={handleAdjustBalance}
            className="w-full flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            Confirm Adjustment
          </button>
        </div>
      </motion.div>

      {/* Transaction History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-4">Recent Adjustments</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Reason
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Sample data - replace with real data */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  2024-03-15
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  John Doe
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Add
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  $100.00
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Bonus payment
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}