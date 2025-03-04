import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Layout from '../components/layout/Layout';
import PublicLayout from '../components/layout/PublicLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Onboarding from '../pages/Onboarding';
import Dashboard from '../pages/Dashboard';
import Network from '../pages/Network';
import Profile from '../pages/Profile';
import LandingPage from '../pages/public/LandingPage';
import Plans from '../pages/public/Plans';
import AdminDashboard from '../pages/admin/AdminDashboard';
import UserManagement from '../pages/admin/UserManagement';
import RewardsManagement from '../pages/admin/RewardsManagement';
import InvestmentPlans from '../pages/admin/InvestmentPlans';
import TaskManagement from '../pages/admin/TaskManagement';
import PoolManagement from '../pages/admin/PoolManagement';
import TokenManagement from '../pages/admin/TokenManagement';
import FrontendManager from '../pages/admin/frontend/FrontendManager';
import BalanceAdjustment from '../pages/admin/tools/BalanceAdjustment';
import RankAdjustment from '../pages/admin/tools/RankAdjustment';
import GamificationHub from '../pages/GamificationHub';

const ProtectedRoute = ({ children, roles = [] }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (roles.length && !roles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout><Outlet /></PublicLayout>}>
        <Route index element={<LandingPage />} />
        <Route path="plans" element={<Plans />} />
        <Route path="login" element={user ? <Navigate to="/dashboard" replace /> : <Login />} />
        <Route path="register" element={user ? <Navigate to="/dashboard" replace /> : <Register />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="network" element={<Network />} />
        <Route path="profile" element={<Profile />} />
        <Route path="gamification" element={<GamificationHub />} />
        <Route path="onboarding" element={<Onboarding />} />

        {/* Admin Routes */}
        <Route path="admin">
          <Route index element={
            <ProtectedRoute roles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="users" element={
            <ProtectedRoute roles={['admin']}>
              <UserManagement />
            </ProtectedRoute>
          } />
          <Route path="rewards" element={
            <ProtectedRoute roles={['admin']}>
              <RewardsManagement />
            </ProtectedRoute>
          } />
          <Route path="investment-plans" element={
            <ProtectedRoute roles={['admin']}>
              <InvestmentPlans />
            </ProtectedRoute>
          } />
          <Route path="tasks" element={
            <ProtectedRoute roles={['admin']}>
              <TaskManagement />
            </ProtectedRoute>
          } />
          <Route path="pools" element={
            <ProtectedRoute roles={['admin']}>
              <PoolManagement />
            </ProtectedRoute>
          } />
          <Route path="tokens" element={
            <ProtectedRoute roles={['admin']}>
              <TokenManagement />
            </ProtectedRoute>
          } />
          <Route path="frontend/*" element={
            <ProtectedRoute roles={['admin']}>
              <FrontendManager />
            </ProtectedRoute>
          } />
          <Route path="tools/balance" element={
            <ProtectedRoute roles={['admin']}>
              <BalanceAdjustment />
            </ProtectedRoute>
          } />
          <Route path="tools/ranks" element={
            <ProtectedRoute roles={['admin']}>
              <RankAdjustment />
            </ProtectedRoute>
          } />
        </Route>
      </Route>
    </Routes>
  );
}