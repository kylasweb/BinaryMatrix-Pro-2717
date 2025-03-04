import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { calculateCommissions } from '../utils/helpers';

const NetworkContext = createContext(null);

export const useNetwork = () => useContext(NetworkContext);

export const NetworkProvider = ({ children }) => {
  const { user } = useAuth();
  const [network, setNetwork] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalEarnings: 0,
    activeUsers: 0,
    totalPools: 0,
    totalRewards: 0
  });
  const [ranks] = useState({
    BRONZE: { minTeam: 2, minEarnings: 100 },
    SILVER: { minTeam: 5, minEarnings: 500 },
    GOLD: { minTeam: 10, minEarnings: 1000 },
    PLATINUM: { minTeam: 20, minEarnings: 2000 },
    DIAMOND: { minTeam: 50, minEarnings: 5000 }
  });

  useEffect(() => {
    if (user) {
      loadNetworkData();
    }
  }, [user]);

  const loadNetworkData = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    setNetwork(users);
    
    const poolData = JSON.parse(localStorage.getItem('pools') || '[]');
    const rewardsData = JSON.parse(localStorage.getItem('rewards') || '[]');
    
    setStats({
      totalUsers: users.length,
      totalEarnings: users.reduce((acc, user) => acc + user.earnings, 0),
      activeUsers: users.filter(u => u.lastActive > Date.now() - 7 * 24 * 60 * 60 * 1000).length,
      totalPools: poolData.length,
      totalRewards: rewardsData.reduce((acc, reward) => acc + reward.amount, 0)
    });
  };

  const getDownline = (userId, level = 1, maxLevel = 10) => {
    if (level > maxLevel) return [];
    
    const directDownline = network.filter(u => u.sponsorId === userId);
    const fullDownline = [...directDownline];
    
    directDownline.forEach(member => {
      const subDownline = getDownline(member.id, level + 1, maxLevel);
      fullDownline.push(...subDownline);
    });
    
    return fullDownline;
  };

  const getExtremeLegs = (userId) => {
    const user = network.find(u => u.id === userId);
    if (!user) return { extremeLeft: null, extremeRight: null };

    const findExtremeLeg = (legId, direction) => {
      let current = network.find(u => u.id === legId);
      while (current) {
        const nextLeg = network.find(u => u.id === (direction === 'left' ? current.leftLeg : current.rightLeg));
        if (!nextLeg) break;
        current = nextLeg;
      }
      return current?.id || null;
    };

    return {
      extremeLeft: findExtremeLeg(user.leftLeg, 'left'),
      extremeRight: findExtremeLeg(user.rightLeg, 'right')
    };
  };

  const calculateRank = (userId) => {
    const user = network.find(u => u.id === userId);
    if (!user) return 'NONE';

    const teamSize = getDownline(userId).length;
    const earnings = user.earnings;

    if (teamSize >= ranks.DIAMOND.minTeam && earnings >= ranks.DIAMOND.minEarnings) return 'DIAMOND';
    if (teamSize >= ranks.PLATINUM.minTeam && earnings >= ranks.PLATINUM.minEarnings) return 'PLATINUM';
    if (teamSize >= ranks.GOLD.minTeam && earnings >= ranks.GOLD.minEarnings) return 'GOLD';
    if (teamSize >= ranks.SILVER.minTeam && earnings >= ranks.SILVER.minEarnings) return 'SILVER';
    if (teamSize >= ranks.BRONZE.minTeam && earnings >= ranks.BRONZE.minEarnings) return 'BRONZE';
    return 'STARTER';
  };

  const distributeCommissions = (amount, userId) => {
    const upline = [];
    let current = network.find(u => u.id === userId);
    
    while (current && current.sponsorId !== 'ADMIN') {
      const sponsor = network.find(u => u.id === current.sponsorId);
      if (sponsor) upline.push(sponsor);
      current = sponsor;
    }

    upline.forEach((sponsor, level) => {
      const commission = calculateCommissions(amount, level + 1);
      sponsor.earnings += commission;
    });

    localStorage.setItem('users', JSON.stringify(network));
    loadNetworkData();
  };

  const value = {
    network,
    stats,
    ranks,
    getDownline,
    getExtremeLegs,
    calculateRank,
    distributeCommissions,
    refreshNetwork: loadNetworkData
  };

  return (
    <NetworkContext.Provider value={value}>
      {children}
    </NetworkContext.Provider>
  );
};