import type { SectionGridProps } from "./SectionGrid.props";
import styles from "./SectionGrid.module.scss";
import { CardCategory, CardNav, CardProclamation } from "@molecules/index";

export default function SectionGrid({ type }: SectionGridProps) {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in consequat sodales, urna justo cursus augue, vitae efficitur lectus sapien at lorem.";

  const navItemGuest = [
    { title: "Accueil", uri: "/" },
    { title: "Inscription", uri: "/register" },
    { title: "Connexion", uri: "/login" },
    { title: "Plan du site", uri: "/sitemap" },
    { title: "À propos", uri: "/about" },
    { title: "Conditions d'utilisation", uri: "/terms-of-use" },
    { title: "Politique de confidentialité", uri: "/privacy-policy" },
    { title: "Politique des cookies", uri: "/cookies-policy" },
    { title: "Mentions légales", uri: "/legal-notice" },
    { title: "Contact", uri: "/contact" },
    { title: "Accessibilité", uri: "/accessibility" },
  ];

  const navItem = [
    { title: "Déconnexion", uri: "/logout" },
    { title: "Accueil", uri: "/" },
    { title: "Catégories", uri: "/categories" },
    { title: "Favoris", uri: "/favorites" },
    { title: "Plan du site", uri: "/sitemap" },
    { title: "À propos", uri: "/about" },
    { title: "Conditions d'utilisation", uri: "/terms-of-use" },
    { title: "Politique de confidentialité", uri: "/privacy-policy" },
    { title: "Politique des cookies", uri: "/cookies-policy" },
    { title: "Mentions légales", uri: "/legal-notice" },
    { title: "Contact", uri: "/contact" },
    { title: "Accessibilité", uri: "/accessibility" },
  ];

  const navItemAdmin = [
    { title: "Déconnexion", uri: "/logout" },
    { title: "Utilisateurs", uri: "/admin/users" },
    { title: "Proclamations", uri: "/admin/proclamations" },
    { title: "Sons", uri: "/admin/sounds" },
    { title: "Catégories", uri: "/admin/categories" },
  ];

  const categories = [
    { title: "Détresse", uri: "/categories/detresse/proclamations" },
    { title: "Triste", uri: "/categories/triste/proclamations" },
    { title: "Solitude", uri: "/categories/solitude/proclamations" },
    { title: "Anxiété", uri: "/categories/anxiete/proclamations" },
    { title: "Colère", uri: "/categories/colere/proclamations" },
    { title: "Joie", uri: "/categories/joie/proclamations" },
    { title: "Sérénité", uri: "/categories/serenite/proclamations" },
    { title: "Espoir", uri: "/categories/espoir/proclamations" },
    { title: "Motivation", uri: "/categories/motivation/proclamations" },
    { title: "Résilience", uri: "/categories/resilience/proclamations" },
    { title: "Confiance", uri: "/categories/confiance/proclamations" },
    { title: "Estime de soi", uri: "/categories/estime-de-soi/proclamations" },
    { title: "Apaisement", uri: "/categories/apaisement/proclamations" },
    { title: "Courage", uri: "/categories/courage/proclamations" },
    {
      title: "Reconnaissance",
      uri: "/categories/reconnaissance/proclamations",
    },
    { title: "Pardon", uri: "/categories/pardon/proclamations" },
    { title: "Gratitude", uri: "/categories/gratitude/proclamations" },
    { title: "Rebond", uri: "/categories/rebond/proclamations" },
    { title: "Patience", uri: "/categories/patience/proclamations" },
    { title: "Acceptation", uri: "/categories/acceptation/proclamations" },
    { title: "Soutien", uri: "/categories/soutien/proclamations" },
    { title: "Inspiration", uri: "/categories/inspiration/proclamations" },
  ];

  const proclamations = [
    {
      title: "Proclamation 1",
      description: lorem,
      uri: "/categories/detresse/proclamations/4",
    },
    {
      title: "Proclamation 2",
      description: lorem,
      uri: "/categories/detresse/proclamations/5",
    },
    {
      title: "Proclamation 3",
      description: lorem,
      uri: "/categories/detresse/proclamations/6",
    },

    {
      title: "Proclamation 4",
      description: lorem,
      uri: "/categories/detresse/proclamations/7",
    },
    {
      title: "Proclamation 5",
      description: lorem,
      uri: "/categories/detresse/proclamations/8",
    },
  ];

  const navHomeGuest = [
    { title: "Inscription", uri: "/register" },
    { title: "Connexion", uri: "/login" },
  ];

  const navHome = [
    { title: "Contacte", uri: "/contact" },
    { title: "Catégories", uri: "/categories" },
    { title: "Accessibilité", uri: "/accessibility" },
  ];

  return (
    <section className={styles.sectionGrid}>
      {(() => {
        switch (type) {
          case "menuGuest":
            return (
              <nav className={styles.navMenu}>
                {navItemGuest.map((item, index) => (
                  <CardNav key={index} title={item.title} uri={item.uri} />
                ))}
              </nav>
            );
          case "menu":
            return (
              <nav className={styles.navMenu}>
                {navItem.map((item, index) => (
                  <CardNav key={index} title={item.title} uri={item.uri} />
                ))}
              </nav>
            );
          case "admin":
            return (
              <nav className={styles.navMenu}>
                {navItemAdmin.map((item, index) => (
                  <CardNav key={index} title={item.title} uri={item.uri} />
                ))}
              </nav>
            );
          case "homeGuest":
            return (
              <nav className={styles.navHomeGuest}>
                {navHomeGuest.map((item, index) => (
                  <CardCategory key={index} title={item.title} uri={item.uri} />
                ))}
              </nav>
            );
          case "home":
            return (
              <nav className={styles.navHome}>
                {navHome.map((item, index) => (
                  <CardCategory key={index} title={item.title} uri={item.uri} />
                ))}
              </nav>
            );
          case "category":
            return (
              <nav className={styles.navCategory}>
                {categories.map((item, index) => (
                  <CardCategory key={index} title={item.title} uri={item.uri} />
                ))}
              </nav>
            );
          case "proclamation": {
            // 1) Première boucle: regrouper par paquets de 5
            const groups: (typeof proclamations)[] = [];
            for (let i = 0; i < proclamations.length; i += 3) {
              groups.push(proclamations.slice(i, i + 3));
            }

            // 2) Deuxième boucle: rendre chaque groupe (ligne scrollable)
            return (
              <div className={styles.proclamationsWrapper}>
                {groups.map((g, gi) => (
                  <div key={gi} className={styles.proclamationRow}>
                    {g.map((p, pi) => (
                      <div key={pi} className={styles.proclamationCard}>
                        <CardProclamation
                          title={p.title}
                          description={p.description}
                          uri={p.uri}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            );
          }
          default:
            return <p>Type non reconnu.</p>;
        }
      })()}
    </section>
  );
}
