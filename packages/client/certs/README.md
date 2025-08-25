Certificats de développement (non commités)
================================================

Placez ici vos certificats auto-signés pour Vite :

- localhost-key.pem
- localhost-cert.pem

Comment générer rapidement (PowerShell + mkcert recommandé) :

1. Installer mkcert : https://github.com/FiloSottile/mkcert
2. mkcert -install
3. mkcert localhost 127.0.0.1 ::1
4. Renommer les fichiers générés (ex: localhost+2-key.pem -> localhost-key.pem, localhost+2.pem -> localhost-cert.pem) et les placer ici.

Alternatif OpenSSL (moins pratique, peut déclencher des warnings) :

openssl req -x509 -newkey rsa:2048 -nodes -keyout localhost-key.pem -out localhost-cert.pem -days 365 -subj "/CN=localhost"

Ensuite lancer : pnpm dev:https (à la racine) pour démarrer client + server en HTTPS (si certificat serveur aussi configuré).

Ne pas commiter ces fichiers.