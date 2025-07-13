import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RemixBrowser } from '@remix-run/react';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RemixBrowser />
  </StrictMode>,
);