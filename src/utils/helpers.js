export const generateId = () => {
  return 'id_' + Math.random().toString(36).substr(2, 9);
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

export const calculateCommissions = (amount, level) => {
  const rates = {
    1: 0.1,  // 10% for level 1
    2: 0.05, // 5% for level 2
    3: 0.03, // 3% for level 3
    4: 0.02, // 2% for level 4
    5: 0.01  // 1% for level 5+
  };
  
  const rate = rates[level] || rates[5];
  return amount * rate;
};

export const getNetworkLevel = (userId, network) => {
  let level = 1;
  let current = network.find(u => u.id === userId);
  
  while (current && current.sponsorId !== 'ADMIN') {
    current = network.find(u => u.id === current.sponsorId);
    level++;
  }
  
  return level;
};