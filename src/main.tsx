import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/modoctor"> {/* تأكد من توافق اسم المستودع */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
