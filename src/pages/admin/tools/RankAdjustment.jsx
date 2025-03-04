import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiArrowUp, FiArrowDown, FiSearch } from 'react-icons/fi';

export default function RankAdjustment() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [newRank, setNewRank] = useState('');
  const [reason, setReason] = useState('');

  const ranks = ['STARTER', 'BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'DIAMOND'];

  const handleAdjustRank = () => {
    if (!selectedUser || !newRank || !reason) return;
    
    // In a real app, this would make an API call
    console.log('Adjusting rank:', {
      userId: selectedUser.id,
      newRank,
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
        <h2 className="text-2xl font-semibold mb-6">Rank Adjustment</h2>
        
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

        {/* Rank Selection */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Rank
            </label>
            <div className="grid grid-cols-3 gap-4">
              {ranks.map((rank) => (
                <button
                  key={rank}
                  onClick={() => setNewRank(rank)}
                  className={`flex items-center justify-center px-4 py-2 rounded-lg ${
                    newRank === rank
                      ? 'bg-primary-100 text-primary-700 border-2 border-primary-500'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  <FiStar className="mr-2" />
                  {rank}
                </button>
              ))}
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
              placeholder="Enter reason for rank adjustment"
              rows={3}
            />
          </div>

          <button
            onClick={handleAdjustRank}
            className="w-full flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            Confirm Rank Adjustment
          </button>
        </div>
      </motion.div>

      {/* Rank History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-4">Recent Rank Changes</h3>
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
                  Previous Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  New Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Changed By
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
                  SILVER
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  GOLD
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Admin
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}