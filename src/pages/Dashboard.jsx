import { useAuth } from '../contexts/AuthContext';
import { useNetwork } from '../contexts/NetworkContext';
import { motion } from 'framer-motion';
import StatsCard from '../components/dashboard/StatsCard';
import BinaryTree from '../components/network/BinaryTree';

export default function Dashboard() {
  const { user } = useAuth();
  const { stats, getDownline } = useNetwork();
  const downline = getDownline(user.id);

  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <StatsCard
          title="Total Team Members"
          value={downline.length}
          icon="users"
        />
        <StatsCard
          title="Total Earnings"
          value={`$${user.earnings.toFixed(2)}`}
          icon="dollar"
        />
        <StatsCard
          title="Active Members"
          value={stats.activeUsers}
          icon="chart"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-semibold mb-6">Your Network</h2>
        <BinaryTree userId={user.id} />
      </motion.div>
    </div>
  );
}