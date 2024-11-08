import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const mainfestUrl = 'https://GuessToken.github.io/guess/tonconnect-manifest.json';

createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider manifestUrl={mainfestUrl}>
    <App />
  </TonConnectUIProvider>
)