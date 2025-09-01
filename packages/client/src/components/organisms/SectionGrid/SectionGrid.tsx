import type { SectionGridProps } from "./SectionGrid.props";
import styles from "./SectionGrid.module.scss";
import { CardCategory, CardNav, CardProclamation } from "@molecules/index";
import { useEffect, useRef } from "react";


export default function SectionGrid({ type }: SectionGridProps) {
  const proclamationRowsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (type !== "proclamation") return;
    proclamationRowsRef.current.forEach((row) => {
      if (!row) return;
      const hasOverflow = row.scrollWidth > row.clientWidth + 1;
      if (!hasOverflow) row.classList.add(styles.noOverflow);
      else row.classList.remove(styles.noOverflow);
    });
  }, [type]);

  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in csectetur adipiscing elit. Pellentesque euismod, nibh in consequat sodales, urna justo cursus augue, vitae efficitur lectus sapien at lorem.";

  return (
    <section className={styles.sectionGrid}>
      {(() => {
        switch (type) {
          case "menu":
            return (
              <nav className={styles.navMenu}>
                <CardNav title="Déconnexion" uri="/logout" />
                <CardNav title="Accueil" uri="/" />
                <CardNav title="Inscription" uri="/register" />
                <CardNav title="Connexion" uri="/login" />
                <CardNav title="Plan du site" uri="/sitemap" />
                <CardNav title="À propos" uri="/about" />
                <CardNav title="Conditions d'utilisation" uri="/terms-of-use" />
                <CardNav
                  title="Politique de confidentialité"
                  uri="/privacy-policy"
                />
                <CardNav title="Politique des cookies" uri="/cookies-policy" />
                <CardNav title="Mentions légales" uri="/legal-notice" />
                <CardNav title="Contact" uri="/contact" />
                <CardNav title="Accessibilité" uri="/accessibility" />
              </nav>
            );
          case "admin":
            return (
              <nav className={styles.navMenu}>
                <CardNav title="Catégories" uri="/admin/categories" />
                <CardNav title="Tableau de bord" uri="/admin/dashboard" />
                <CardNav title="Indicateurs clés" uri="/admin/kpi" />
                <CardNav title="Connexion admin" uri="/admin/login" />
                <CardNav title="Proclamations" uri="/admin/proclamations" />
                <CardNav title="Sons" uri="/admin/sounds" />
                <CardNav title="Utilisateurs" uri="/admin/users" />
              </nav>
            );
          case "category":
            return (
              <nav className={styles.navCategory}>
                <CardCategory title="Catégories" uri="/admin/categories" />
                <CardCategory title="Catégories" uri="/admin/categories" />
                <CardCategory title="Catégories" uri="/admin/categories" />
                <CardCategory title="Catégories" uri="/admin/categories" />
                <CardCategory title="Catégories" uri="/admin/categories" />
                <CardCategory title="Catégories" uri="/admin/categories" />
                <CardCategory title="Catégories" uri="/admin/categories" />
                <CardCategory title="Catégories" uri="/admin/categories" />
                <CardCategory title="Catégories" uri="/admin/categories" />
                <CardCategory title="Catégories" uri="/admin/categories" />
                <CardCategory title="Catégories" uri="/admin/categories" />
                <CardCategory title="Catégories" uri="/admin/categories" />
                <CardCategory title="Catégories" uri="/admin/categories" />
                <CardCategory title="Catégories" uri="/admin/categories" />
                <CardCategory title="Catégories" uri="/admin/categories" />
                <CardCategory title="Catégories" uri="/admin/categories" />
                <CardCategory title="CatégoriesCatégoriesCatégoriesCa" uri="/admin/categories" />
              </nav>
            );
          case "proclamation": {
            // 1) Données simulées
            const total = 11;
            const items = Array.from({ length: total }, (_, i) => ({
              title: `Proclamation ${i + 1}`,
              description: lorem,
              uri: "/admin/categories",
            }));

            // 2) Première boucle: regrouper par paquets de 5
            const groups: typeof items[] = [];
            for (let i = 0; i < items.length; i += 3) {
              groups.push(items.slice(i, i + 3));
            }

            // 3) Deuxième boucle: rendre chaque groupe (ligne scrollable)
            return (
              <div className={styles.proclamationsWrapper}>
                {groups.map((g, gi) => (
                  <div
                    key={gi}
                    ref={(el) => {
                      if (el) proclamationRowsRef.current[gi] = el;
                    }}
                    className={styles.proclamationRow}
                  >
                    {g.map((c, ci) => (
                      <div key={ci} className={styles.proclamationCard}>
                        <CardProclamation
                          title={c.title}
                          description={c.description}
                          uri={c.uri}
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
