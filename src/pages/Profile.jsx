import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

export default function Profile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-semibold mb-6">Profile Information</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <div className="mt-1 text-lg">{user.name}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1 text-lg">{user.email}</div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Sponsor ID</label>
            <div className="mt-1 text-lg">{user.sponsorId}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Join Date</label>
            <div className="mt-1 text-lg">
              {new Date(user.joinDate).toLocaleDateString()}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}