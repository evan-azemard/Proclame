import { Container, Title, Wave } from "@atoms/index";
import { Link } from "react-router-dom";
import styles from "./Sitemap.module.scss";

export default function Sitemap() {
  return (
    <Container aria-labelledby="sitemap-title">
      <Wave />
      <Title type={2} id="sitemap-title">
        Accès au plan du site sans authentification
      </Title>
      <br />
      <br />
      <nav aria-label="Plan du site">
        <ul className={styles.sitemapList} role="list">
          <li role="listitem">
            <Link to="/" aria-label="Accueil">
              Accueil
            </Link>
          </li>
          <li role="listitem">
            <Link to="/about" aria-label="À propos">
              À propos
            </Link>
          </li>
          <li role="listitem">
            <Link to="/cookies-policy" aria-label="Politique Cookies">
              Politique Cookies
            </Link>
          </li>
          <li role="listitem">
            <Link to="/legal-notice" aria-label="Mentions légales">
              Mentions légales
            </Link>
          </li>
          <li role="listitem">
            <Link to="/contact" aria-label="Contact">
              Contact
            </Link>
          </li>
          <li role="listitem">
            <Link to="/login" aria-label="Connexion">
              Connexion
            </Link>
          </li>
          <li role="listitem">
            <Link to="/register" aria-label="Inscription">
              Inscription
            </Link>
          </li>
          <li role="listitem">
            <Link
              to="/terms-of-use"
              aria-label="Conditions générales d'utilisation"
            >
              Conditions générales d'utilisation
            </Link>
          </li>
          <li role="listitem">
            <Link
              to="/privacy-policy"
              aria-label="Politique de confidentialité"
            >
              Politique de confidentialité
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
