import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Enregistrement du service worker PWA (production seulement)
if ('serviceWorker' in navigator) {
  // Enregistrement du SW en relatif pour fonctionner sous un sous-répertoire (/proclame/)
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('[PWA] SW enregistré', reg.scope))
      .catch(err => console.warn('[PWA] SW échec enregistrement', err));
  });
}
