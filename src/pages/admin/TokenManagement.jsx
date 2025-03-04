import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCodesandbox, FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';

export default function TokenManagement() {
  const [tokens, setTokens] = useState(JSON.parse(localStorage.getItem('tokens') || '[]'));
  const [newToken, setNewToken] = useState({
    name: '',
    symbol: '',
    totalSupply: 0,
    distribution: {
      team: 20,
      rewards: 30,
      liquidity: 30,
      marketing: 20
    },
    rewardRates: {
      recruitment: 100,
      sales: 50,
      leadership: 200
    }
  });

  const handleAddToken = () => {
    const updatedTokens = [...tokens, { ...newToken, id: Date.now() }];
    setTokens(updatedTokens);
    localStorage.setItem('tokens', JSON.stringify(updatedTokens));
    setNewToken({
      name: '',
      symbol: '',
      totalSupply: 0,
      distribution: {
        team: 20,
        rewards: 30,
        liquidity: 30,
        marketing: 20
      },
      rewardRates: {
        recruitment: 100,
        sales: 50,
        leadership: 200
      }
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
          <h2 className="text-2xl font-semibold">Token Management</h2>
          <button
            onClick={handleAddToken}
            className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            <FiPlus className="mr-2" />
            Add Token
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tokens.map((token) => (
            <motion.div
              key={token.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg border p-4"
            >
              <div className="flex items-center justify-between">
                <FiCodesandbox className="text-primary-500 text-2xl" />
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FiEdit2 />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-semibold mt-2">{token.name}</h3>
              <p className="text-gray-600 text-sm mt-1">Symbol: {token.symbol}</p>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-500">
                    Total Supply
                  </div>
                  <div className="text-xl font-bold text-primary-600">
                    {token.totalSupply.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-2">
                    Distribution
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(token.distribution).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-sm capitalize">{key}:</span>
                        <span className="text-sm font-medium">{value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-2">
                    Reward Rates
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(token.rewardRates).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-sm capitalize">{key}:</span>
                        <span className="text-sm font-medium">{value} tokens</span>
                      </div>
                    ))}
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