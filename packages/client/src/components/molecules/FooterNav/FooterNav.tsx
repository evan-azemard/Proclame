import styles from "./FooterNav.module.scss";
import homePng from "@atoms/Icon/icons/home.png";
import favoritePng from "@atoms/Icon/icons/favorite.png";
import profilePng from "@atoms/Icon/icons/profile.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function FooterNav() {
  const navigate = useNavigate();

  const items = [
    { src: favoritePng, alt: "Favoris", title: "Favoris", uri: "/favorite" },
    { src: homePng, alt: "Accueil", title: "Accueil", uri: "/" },
    { src: profilePng, alt: "Profil", title: "Profil", uri: "/profile" },
  ];

  const location = useLocation();

  if (location.pathname === "/403") return null;
  if (location.pathname === "/404") return null;
  return (
    <>
      <footer className={styles.footer}>
        <nav aria-label="Navigation pied de page">
          <ul>
            {items.map((item) => (
              <li
                key={item.uri}
                onClick={() => navigate(item.uri)}
                aria-label={item.title}
                title={item.title}
              >
                <img src={item.src} alt={item.alt} className={styles.logo} />
              </li>
            ))}
          </ul>
        </nav>
      </footer>
      <div className={styles.mask}></div>
    </>
  );
}
