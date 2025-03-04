import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiPlus, FiTrash2 } from 'react-icons/fi';

export default function RewardsManagement() {
  const [rewards, setRewards] = useState(JSON.parse(localStorage.getItem('rewards') || '[]'));
  const [newReward, setNewReward] = useState({
    name: '',
    description: '',
    amount: 0,
    criteria: { minRank: 'BRONZE', minTeamSize: 5 }
  });

  const handleAddReward = () => {
    const updatedRewards = [...rewards, { ...newReward, id: Date.now() }];
    setRewards(updatedRewards);
    localStorage.setItem('rewards', JSON.stringify(updatedRewards));
    setNewReward({
      name: '',
      description: '',
      amount: 0,
      criteria: { minRank: 'BRONZE', minTeamSize: 5 }
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
          <h2 className="text-2xl font-semibold">Rewards Management</h2>
          <button
            onClick={handleAddReward}
            className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            <FiPlus className="mr-2" />
            Add Reward
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward) => (
            <motion.div
              key={reward.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg border p-4"
            >
              <div className="flex items-center justify-between">
                <FiAward className="text-primary-500 text-2xl" />
                <button className="text-red-500 hover:text-red-700">
                  <FiTrash2 />
                </button>
              </div>
              <h3 className="text-lg font-semibold mt-2">{reward.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{reward.description}</p>
              <div className="mt-4">
                <div className="text-sm text-gray-500">Criteria:</div>
                <div className="flex justify-between mt-1">
                  <span className="text-sm">Min Rank: {reward.criteria.minRank}</span>
                  <span className="text-sm">Team Size: {reward.criteria.minTeamSize}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="text-xl font-bold text-primary-600">
                  ${reward.amount}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}