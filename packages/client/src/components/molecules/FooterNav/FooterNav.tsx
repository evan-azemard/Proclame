import styles from "./FooterNav.module.scss";
import homePng from "@atoms/Icon/icons/home.png";
import favoritePng from "@atoms/Icon/icons/favorite.png";
import profilePng from "@atoms/Icon/icons/profile.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@atoms/index";

export default function FooterNav() {
  const navigate = useNavigate();

  const items = [
    { src: favoritePng, alt: "Favoris", title: "Favoris", uri: "/favorites" },
    { src: homePng, alt: "Accueil", title: "Accueil", uri: "/" },
    { src: profilePng, alt: "Profil", title: "Profil", uri: "/profile" },
  ];

  const location = useLocation();

  const handleCLick = (uri: string) => {
    if ("vibrate" in navigator) {
      navigator.vibrate(50);
    }

    navigate(uri);
  };
  // Ancienne génération DOM remplacée par canvas performant.

  const hide = location.pathname === "/403" || location.pathname === "/404";
  // 1) Élément principal (fond) = footer original
  // 2) Layer blur (bubbles) = overlay dimensionné dynamiquement
  // 3) Layer UI (icônes cliquables) = overlay supérieur

  const baseId = "footer-nav";

  // Génération de bulles (positions & blur) ici (supprime ancien composant)
  // Plus de génération dynamique: grid statique de 10 cellules dans layer blur.

  if (hide) return null;

  // MODE DEBUG: 3 colonnes distinctes avec bordures colorées
  // Mode debug désactivé

  return (
    <>
      <footer className={styles.footer} id={baseId}>
        <div className={styles.footerBase}>
          <div className={styles.footerUiLayer}>
            <nav aria-label="Navigation pied de page" className={styles.navProxy}>
              <ul>
                <li><Button isBack /></li>
                {items.map(item => (
                  <li key={item.uri} onClick={() => handleCLick(item.uri)} aria-label={item.title} title={item.title}>
                    <img src={item.src} alt={item.alt} className={styles.logo} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </footer>
      <div className={styles.mask}></div>
    </>
  );
}
