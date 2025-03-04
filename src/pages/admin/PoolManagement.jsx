import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDroplet, FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';

export default function PoolManagement() {
  const [pools, setPools] = useState(JSON.parse(localStorage.getItem('pools') || '[]'));
  const [newPool, setNewPool] = useState({
    name: '',
    description: '',
    totalAmount: 0,
    distributionCriteria: {
      minRank: 'BRONZE',
      minTeamSize: 5,
      minVolume: 1000
    },
    distributionFrequency: 'MONTHLY', // WEEKLY, MONTHLY, QUARTERLY
    distributionPercentage: 10
  });

  const handleAddPool = () => {
    const updatedPools = [...pools, { ...newPool, id: Date.now(), status: 'ACTIVE' }];
    setPools(updatedPools);
    localStorage.setItem('pools', JSON.stringify(updatedPools));
    setNewPool({
      name: '',
      description: '',
      totalAmount: 0,
      distributionCriteria: {
        minRank: 'BRONZE',
        minTeamSize: 5,
        minVolume: 1000
      },
      distributionFrequency: 'MONTHLY',
      distributionPercentage: 10
    });
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Pool Management</h2>
          <button
            onClick={handleAddPool}
            className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            <FiPlus className="mr-2" />
            Add Pool
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pools.map((pool) => (
            <motion.div
              key={pool.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg border p-4"
            >
              <div className="flex items-center justify-between">
                <FiDroplet className="text-primary-500 text-2xl" />
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FiEdit2 />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-semibold mt-2">{pool.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{pool.description}</p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Total Amount:</span>
                  <span className="font-medium">${pool.totalAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Distribution:</span>
                  <span className="font-medium">{pool.distributionFrequency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Percentage:</span>
                  <span className="font-medium">{pool.distributionPercentage}%</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="text-sm text-gray-500">Criteria:</div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="text-sm">
                    Min Rank: {pool.distributionCriteria.minRank}
                  </div>
                  <div className="text-sm">
                    Min Team: {pool.distributionCriteria.minTeamSize}
                  </div>
                  <div className="text-sm">
                    Min Volume: ${pool.distributionCriteria.minVolume}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}