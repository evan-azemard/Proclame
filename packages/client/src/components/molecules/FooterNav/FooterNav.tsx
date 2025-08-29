import styles from "./FooterNav.module.scss";
import homePng from "@atoms/Icon/icons/home.png";
import favoritePng from "@atoms/Icon/icons/favorite.png";
import profilePng from "@atoms/Icon/icons/profile.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Icon, Wave } from "@atoms/index";
import { useEffect, useState } from "react";

export default function FooterNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isReadingFooter, setIsReadingFooter] = useState(false);
  const READING_ROUTE_REGEX = /^\/categories\/[^/]+\/proclamations\/[^/]+$/;
  const isReadingPage = READING_ROUTE_REGEX.test(location.pathname);

  useEffect(() => {
    setIsReadingFooter(isReadingPage);
  }, [isReadingPage]);

  if (location.pathname === "/403") return null;
  if (location.pathname === "/404") return null;

  const handleCLick = (uri: string) => {
    if ("vibrate" in navigator) navigator.vibrate(50);
    navigate(uri);
  };

  const items = [
    { src: favoritePng, alt: "Favoris", title: "Favoris", uri: "/favorites" },
    { src: homePng, alt: "Accueil", title: "Accueil", uri: "/" },
    { src: profilePng, alt: "Profil", title: "Profil", uri: "/profile" },
  ];

  if (isReadingFooter) {
    return (
      <footer className={`${styles.footer} ${styles.footerReading}`}>
        <nav aria-label="Navigation pied de page (lecture)">
          <ul>
            <li>
              <Button isBack />
            </li>
            <li>
              <img
                src={favoritePng}
                alt="favori"
                title="favori"
                className={styles.logo}
              />
            </li>
            <span className={styles.line}></span>
            <li>
              <Icon name="fire" title="feu" />
            </li>
            <li>
              <Icon name="storm" title="orage" />
            </li>
            <li>
              <Icon name="melody" title="musique" />
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
  return (
    <>
      <footer className={styles.footer}>
        <nav aria-label="Navigation pied de page">
          <ul>
            <li>
              <Button isBack />
            </li>
            {items.map((item) => (
              <li
                key={item.uri}
                onClick={() => handleCLick(item.uri)}
                aria-label={item.title}
                title={item.title}
              >
                <img src={item.src} alt={item.alt} className={styles.logo} />
              </li>
            ))}
          </ul>
        </nav>
        <span className={styles.wave}>
          <Wave />
        </span>
      </footer>
    </>
  );
}
