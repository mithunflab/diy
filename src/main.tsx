import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Import the main app from the app directory
import App from '../app/root';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}