import { HashRouter as Router } from 'react-router-dom';
import { QuestProvider } from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css';
import { AuthProvider } from './contexts/AuthContext';
import { NetworkProvider } from './contexts/NetworkContext';
import AppRoutes from './routes/AppRoutes';
import { Toaster } from './components/ui/Toaster';
import questConfig from './questConfig';
import './App.css';

function App() {
  return (
    <Router>
      <QuestProvider
        apiKey={questConfig.APIKEY}
        entityId={questConfig.ENTITYID}
        apiType="PRODUCTION"
      >
        <AuthProvider>
          <NetworkProvider>
            <AppRoutes />
            <Toaster />
          </NetworkProvider>
        </AuthProvider>
      </QuestProvider>
    </Router>
  );
}

export default App;