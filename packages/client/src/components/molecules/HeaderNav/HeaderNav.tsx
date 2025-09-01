import styles from "./HeaderNav.module.scss";
import logo from "@atoms/Icon/icons/logo.png";
import burger from "@atoms/Icon/icons/burger.png";
import { Title } from "@atoms/index";
import { useLocation, useNavigate } from "react-router-dom";

const translations: Record<string, string> = {
  // Admin routes
  "/admin/categories": "Catégories",
  "/admin/dashboard": "Tableau de bord",
  "/admin/kpi": "Indicateurs clés",
  "/admin/login": "Connexion",
  "/admin/proclamations": "Proclamations",
  "/admin/sounds": "Sons",
  "/admin/users": "Utilisateurs",

  // Public routes
  "/": "Accueil",
  "/register": "Inscription",
  "/login": "Connexion",
  "/accessibility": "Accessibilité",
  "/sitemap": "Plan du site",
  "/about": "À propos",
  "/terms-of-use": "Conditions d'utilisation",
  "/contact": "Contact",
  "/cookies-policy": "Politique de cookies",
  "/legal-notice": "Mentions légales",
  "/privacy-policy": "Politique de confidentialité",
  "/menu": "Menu",
  "/favorite": "Favori",
  "/profil": "Profil",
  "/categories": "Categories ",
  "/403": "Accès interdit",
  "*": "Page non trouvée",

  // Protected routes
  "/category/:categoryId/proclamations": "Proclamations de catégorie",
  "/favorites": "Favoris",
  "/reading/:proclamationId": "Lecture",
  "/profile": "Profil",
};

export default function HeaderNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const pageTitle = translations[location.pathname] || "Page inconnue";

  // Le masquage du Header est maintenant géré dans AppLayout via l'URL.

  const handleClick = (home: string) => {
    if ("vibrate" in navigator) {
      navigator.vibrate(50);
      if (home == "home") {
        navigate("/");
        return;
      }
      if (location.pathname === "/menu") {
        navigate(-1);
      } else {
        navigate("/menu");
      }
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div>
          <nav>
            <ul>
              <li>
                <img
                  className={styles.logo}
                  src={logo}
                  alt="Logo du site, un shofar"
                  onClick={() => handleClick("home")}
                />
              </li>
            </ul>
          </nav>
          <div>
            <Title type={1}>{pageTitle}</Title>
          </div>
        </div>
        <img
          src={burger}
          alt="Logo du menu"
          onClick={() => handleClick("")}
          className={styles.menu}
        />
      </header>
      <div className={styles.mask}></div>
      <div className={styles.mask2}></div>
    </>
  );
}
