import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiTrendingUp, FiTarget } from 'react-icons/fi';

export default function GamificationHub() {
  const [achievements] = useState([
    {
      id: 1,
      title: 'Fast Starter',
      description: 'Recruit 5 members in your first month',
      progress: 3,
      target: 5,
      reward: 100
    },
    {
      id: 2,
      title: 'Team Builder',
      description: 'Build a team of 50 members',
      progress: 25,
      target: 50,
      reward: 500
    }
  ]);

  const [leaderboard] = useState([
    { id: 1, name: 'John Doe', points: 1500, rank: 'GOLD' },
    { id: 2, name: 'Jane Smith', points: 1200, rank: 'SILVER' }
  ]);

  const [challenges] = useState([
    {
      id: 1,
      title: 'Weekend Warrior',
      description: 'Recruit 3 members this weekend',
      reward: 200,
      deadline: '2024-03-20'
    }
  ]);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <FiAward className="text-primary-500 text-2xl mr-2" />
            <h2 className="text-xl font-semibold">Achievements</h2>
          </div>
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="border rounded-lg p-4">
                <h3 className="font-medium">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
                <div className="mt-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>
                      {achievement.progress}/{achievement.target}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-500 h-2 rounded-full"
                      style={{
                        width: `${(achievement.progress / achievement.target) * 100}%`
                      }}
                    />
                  </div>
                </div>
                <div className="mt-2 text-sm text-primary-600">
                  Reward: {achievement.reward} tokens
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <FiTrendingUp className="text-primary-500 text-2xl mr-2" />
            <h2 className="text-xl font-semibold">Leaderboard</h2>
          </div>
          <div className="space-y-4">
            {leaderboard.map((user, index) => (
              <div
                key={user.id}
                className="flex items-center justify-between border rounded-lg p-4"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-gray-600">{user.rank}</div>
                  </div>
                </div>
                <div className="text-lg font-semibold">{user.points}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <FiTarget className="text-primary-500 text-2xl mr-2" />
            <h2 className="text-xl font-semibold">Active Challenges</h2>
          </div>
          <div className="space-y-4">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="border rounded-lg p-4">
                <h3 className="font-medium">{challenge.title}</h3>
                <p className="text-sm text-gray-600">{challenge.description}</p>
                <div className="mt-2 text-sm">
                  <div className="text-primary-600">
                    Reward: {challenge.reward} tokens
                  </div>
                  <div className="text-gray-500">
                    Deadline: {new Date(challenge.deadline).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}