import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { investmentPlans } from '../../data/testCredentials';

export default function Plans() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Investment Plan
          </h1>
          <p className="text-xl text-gray-600">
            Select the plan that best fits your goals and start earning today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {investmentPlans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="text-4xl font-bold text-primary-600 mb-6">
                  ${plan.price}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <FiCheck className="text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Duration:</span>
                    <span>{plan.duration} days</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>ROI:</span>
                    <span>{plan.roi}%</span>
                  </div>
                </div>
              </div>
              <div className="px-8 pb-8">
                <Link
                  to="/register"
                  className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get Started
                  <FiArrowRight className="inline-block ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}