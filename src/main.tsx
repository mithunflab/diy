import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Simple wrapper component to run the app in Lovable
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Bolt.diy Application</h1>
        <p className="text-gray-600 text-center mb-4">
          This is a Bolt.diy application running in Lovable.
        </p>
        <div className="text-sm text-gray-500 text-center">
          <p>This Remix + Cloudflare Workers application is designed for deployment to Cloudflare Pages.</p>
          <p className="mt-2">To run the full application, deploy it to Cloudflare Pages using the deploy scripts.</p>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}