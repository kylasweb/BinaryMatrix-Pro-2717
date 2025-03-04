export const testUsers = [
  {
    role: 'admin',
    email: 'admin@zocial.com',
    password: 'admin123',
    name: 'Admin User',
    id: 'ADMIN',
    sponsorId: null,
    joinDate: '2024-01-01',
    earnings: 50000,
    rank: 'DIAMOND'
  },
  {
    role: 'leader',
    email: 'leader@zocial.com',
    password: 'leader123',
    name: 'Team Leader',
    id: 'LEADER1',
    sponsorId: 'ADMIN',
    joinDate: '2024-01-15',
    earnings: 25000,
    rank: 'PLATINUM'
  },
  {
    role: 'user',
    email: 'user@zocial.com',
    password: 'user123',
    name: 'Regular User',
    id: 'USER1',
    sponsorId: 'LEADER1',
    joinDate: '2024-02-01',
    earnings: 5000,
    rank: 'GOLD'
  }
];

export const investmentPlans = [
  {
    id: 'starter',
    name: 'Starter Plan',
    price: 100,
    description: 'Perfect for beginners',
    features: [
      'Basic Binary Matrix',
      'Up to 5% Commission',
      'Basic Support'
    ],
    duration: 30,
    roi: 10
  },
  {
    id: 'professional',
    name: 'Professional Plan',
    price: 500,
    description: 'For serious networkers',
    features: [
      'Advanced Binary Matrix',
      'Up to 10% Commission',
      'Priority Support',
      'Team Building Tools'
    ],
    duration: 60,
    roi: 15
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    price: 1000,
    description: 'Maximum earning potential',
    features: [
      'Premium Binary Matrix',
      'Up to 15% Commission',
      'VIP Support',
      'Advanced Analytics',
      'Leadership Training'
    ],
    duration: 90,
    roi: 20
  }
];