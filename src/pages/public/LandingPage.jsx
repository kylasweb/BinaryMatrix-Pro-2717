import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const [content, setContent] = useState({
    hero: {
      title: 'Welcome to Zocial Ecosystem',
      subtitle: 'Transform Your Digital Interactions with Blockchain Technology',
      cta: 'Join Now'
    },
    features: [
      {
        title: 'Zocial.network',
        description: 'Connect and interact with our vibrant community platform'
      },
      {
        title: 'Zocial.chat',
        description: 'Seamless communication network between users'
      },
      {
        title: 'Zocial.exchange',
        description: 'Advanced trading platform for cryptocurrency exchange'
      },
      {
        title: 'Zocial.life',
        description: 'Easy platform for coin purchases and transactions'
      }
    ],
    tokenomics: {
      title: 'Tokenomics',
      supply: '21 Million Tokens (Mintable)',
      features: [
        'Binary Matrix System',
        'Spillover Pools',
        'Fast Track Bonuses',
        'Team Building Rewards'
      ]
    }
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20"
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{content.hero.title}</h1>
          <p className="text-xl md:text-2xl mb-8">{content.hero.subtitle}</p>
          <Link
            to="/register"
            className="bg-white text-primary-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            {content.hero.cta}
          </Link>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{content.tokenomics.title}</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-xl font-semibold mb-6 text-center">
                Total Supply: {content.tokenomics.supply}
              </div>
              <div className="grid grid-cols-2 gap-6">
                {content.tokenomics.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}