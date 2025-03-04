import { HashRouter as Router } from 'react-router-dom';
import { QuestProvider } from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css';
import { AuthProvider } from './contexts/AuthContext';
import { NetworkProvider } from './contexts/NetworkContext';
import AppRoutes from './routes/AppRoutes';
import { Toaster } from './components/ui/Toaster';
import questConfig from './questConfig';

function App() {
  return (
    <QuestProvider
      apiKey={questConfig.APIKEY}
      entityId={questConfig.ENTITYID}
      apiType="PRODUCTION"
    >
      <Router>
        <AuthProvider>
          <NetworkProvider>
            <AppRoutes />
            <Toaster />
          </NetworkProvider>
        </AuthProvider>
      </Router>
    </QuestProvider>
  );
}

export default App;