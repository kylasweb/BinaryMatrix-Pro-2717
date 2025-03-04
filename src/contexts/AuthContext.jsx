import { createContext, useContext, useState, useEffect } from 'react';
import { testUsers } from '../data/testCredentials';
import { generateId } from '../utils/helpers';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize test users in localStorage if they don't exist
    const existingUsers = localStorage.getItem('users');
    if (!existingUsers) {
      localStorage.setItem('users', JSON.stringify(testUsers));
    }

    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (credentials) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      u => u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      return { success: true, newUser: false };
    }
    return { success: false, newUser: false };
  };

  const register = (userData) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if email already exists
    if (users.find(u => u.email === userData.email)) {
      return { success: false, error: 'Email already exists' };
    }

    const newUser = {
      ...userData,
      id: generateId(),
      sponsorId: userData.sponsorId || 'ADMIN',
      role: 'user',
      level: 1,
      leftLeg: null,
      rightLeg: null,
      joinDate: new Date().toISOString(),
      earnings: 0,
      rank: 'STARTER',
      wallet: {
        balance: 0,
        deposits: [],
        withdrawals: []
      }
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return { success: true, newUser: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    logout,
    register,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};