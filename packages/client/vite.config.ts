// Import utilitaire Vite pour typer et exporter la configuration proprement
import { defineConfig } from 'vite'
// Utilitaires Node pour convertir une URL en chemin (sert à créer un alias vers src)
import { fileURLToPath, URL } from 'node:url'
// Plugin officiel React pour Vite (JSX/TSX, Fast Refresh, etc.)
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Active le plugin React (support JSX/TSX, HMR, etc.)
  // On l'active car il facilite le développement d'applications React en offrant des fonctionnalités telles que le rechargement à chaud.
  // C'est à dire qu'il permet de voir les modifications en temps réel sans recharger la page. Il sert aussi à gérer les erreurs et les avertissements.
  // Comme par exemple la gestion des erreurs de compilation. ex: affichage d'un message d'erreur dans la console si le code contient des erreurs de syntaxe.
  plugins: [react()],
  // Configuration de la résolution des imports
  resolve: {
    alias: {
      // Déclare un alias '@' qui pointe vers le dossier 'src'.
      // Permet d'écrire: import X from '@/components/X' au lieu de chemins relatifs longs.
  '@': fileURLToPath(new URL('./src', import.meta.url)),
  // Alias Atomic Design + couches app
  '@atoms': fileURLToPath(new URL('./src/components/atoms', import.meta.url)),
  '@molecules': fileURLToPath(new URL('./src/components/molecules', import.meta.url)),
  '@organisms': fileURLToPath(new URL('./src/components/organisms', import.meta.url)),
  '@templates': fileURLToPath(new URL('./src/components/templates', import.meta.url)),
  '@pages': fileURLToPath(new URL('./src/components/pages', import.meta.url)),
  '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
  '@api': fileURLToPath(new URL('./src/api', import.meta.url)),
  '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url))
    }
  },
  // Options CSS/Sass
  css: {
    preprocessorOptions: {
      scss: {
        // Injecte automatiquement les variables Sass dans tous les fichiers .scss/.module.scss.
        // Ainsi, pas besoin de répéter `@use "@/styles/variables" as *;` dans chaque fichier.
        // Note: on garde un '\n' final pour éviter que Vite ne concatène cette ligne avec la première du fichier.
        additionalData: '@use "@/styles/variables" as *;\n'
      }
    }
  }
})
