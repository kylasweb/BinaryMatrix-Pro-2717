import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiToggleLeft, FiToggleRight } from 'react-icons/fi';

export default function FeatureManager() {
  const [features, setFeatures] = useState({
    binaryMatrix: true,
    rewards: true,
    gamification: true,
    poolSystem: true,
    customTokens: false,
    autoSponsorship: true
  });

  const toggleFeature = (feature) => {
    setFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature]
    }));
    // In a real app, this would persist to backend
    localStorage.setItem('features', JSON.stringify({
      ...features,
      [feature]: !features[feature]
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">Feature Management</h2>
      <div className="space-y-4">
        {Object.entries(features).map(([feature, enabled]) => (
          <motion.div
            key={feature}
            whileHover={{ scale: 1.01 }}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <span className="text-lg capitalize">
              {feature.replace(/([A-Z])/g, ' $1').trim()}
            </span>
            <button
              onClick={() => toggleFeature(feature)}
              className="text-2xl"
            >
              {enabled ? (
                <FiToggleRight className="text-blue-600" />
              ) : (
                <FiToggleLeft className="text-gray-400" />
              )}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}