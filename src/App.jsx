
import './App.css';
import Home from './Components/Home/Home';
import Artists from './Components/artists/Artists';
import { KeyringProvider, useKeyring } from '@w3ui/react-keyring'
import { UploaderProvider } from '@w3ui/react-uploader'
import ContentPage from './ContentPage';
import { useEffect } from 'react';
import Last from './Components/Footer/Last';

function App() {
  return (
    <KeyringProvider>
      <UploaderProvider>
        <AgentLoader>
          <Home />
          <ContentPage />
          <Artists />
          <Last />
        </AgentLoader>
      </UploaderProvider>
    </KeyringProvider>
  );
}

function AgentLoader ({ children }) {
  const [, { loadAgent }] = useKeyring()
  // eslint-disable-next-line
  useEffect(() => { loadAgent() }, []) // load agent - once.
  return children
}

export default App;
