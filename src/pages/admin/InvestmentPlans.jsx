import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDollarSign, FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';

export default function InvestmentPlans() {
  const [plans, setPlans] = useState(JSON.parse(localStorage.getItem('investmentPlans') || '[]'));
  const [newPlan, setNewPlan] = useState({
    name: '',
    description: '',
    minAmount: 0,
    maxAmount: 0,
    duration: 30,
    roi: 10
  });

  const handleAddPlan = () => {
    const updatedPlans = [...plans, { ...newPlan, id: Date.now() }];
    setPlans(updatedPlans);
    localStorage.setItem('investmentPlans', JSON.stringify(updatedPlans));
    setNewPlan({
      name: '',
      description: '',
      minAmount: 0,
      maxAmount: 0,
      duration: 30,
      roi: 10
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
          <h2 className="text-2xl font-semibold">Investment Plans</h2>
          <button
            onClick={handleAddPlan}
            className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            <FiPlus className="mr-2" />
            Add Plan
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg border p-4"
            >
              <div className="flex items-center justify-between">
                <FiDollarSign className="text-primary-500 text-2xl" />
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FiEdit2 />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-semibold mt-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{plan.description}</p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Min Investment:</span>
                  <span className="font-medium">${plan.minAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Max Investment:</span>
                  <span className="font-medium">${plan.maxAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Duration:</span>
                  <span className="font-medium">{plan.duration} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">ROI:</span>
                  <span className="font-medium text-green-600">{plan.roi}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}