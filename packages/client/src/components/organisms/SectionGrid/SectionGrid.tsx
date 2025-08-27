import type { SectionGridProps } from "./SectionGrid.props";
import styles from "./SectionGrid.module.scss";
import { CardCategory, CardNav, CardProclamation } from "@molecules/index";

function chunk<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export default function SectionGrid({ type }: SectionGridProps) {
  const categories = Array.from({ length: 18 }, (_, i) => `Catégorie ${i + 1}`);
  const proclamations = Array.from({ length: 18 }, (_, i) => `Proclamation ${i + 1}`);

  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nibh in consequat sodales, urna justo cursus augue, vitae efficitur lectus sapien at lorem.";

  const renderSlidesNative = (items: string[], cardType: "category" | "proclamation") => {
    const slides = chunk(items, 9); // 9 items per slide => 3 columns x up to 3 rows
    return (
      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          {slides.map((slideItems, si) => {
            const columns: string[][] = [[], [], []];
            for (let i = 0; i < slideItems.length; i++) {
              const colIndex = Math.floor(i / 3);
              columns[colIndex]?.push(slideItems[i]);
            }

            return (
              <div key={si} className={styles.slide}>
                {columns.map((colItems, ci) => (
                  <div key={ci} className={styles.column}>
                    {colItems.map((item, index) => (
                      <div key={index} className={styles.cardWrapper}>
                        {cardType === "category" ? (
                          <CardCategory title={item} uri={`/${cardType}/${si * 9 + ci * 3 + index + 1}`} />
                        ) : (
                          <CardProclamation title={item} description={lorem} uri={`/${cardType}/${si * 9 + ci * 3 + index + 1}`} />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className={styles.sectionGrid}>
      {(() => {
        switch (type) {
          case "menu":
            return (
              <nav>
                <CardNav title="Déconnexion" uri="/logout" />
                <CardNav title="Accueil" uri="/" />
                <CardNav title="Inscription" uri="/register" />
                <CardNav title="Connexion" uri="/login" />
                <CardNav title="Plan du site" uri="/sitemap" />
                <CardNav title="À propos" uri="/about" />
                <CardNav title="Conditions d'utilisation" uri="/terms-of-use" />
                <CardNav title="Politique de confidentialité" uri="/privacy-policy" />
                <CardNav title="Politique des cookies" uri="/cookies-policy" />
                <CardNav title="Mentions légales" uri="/legal-notice" />
                <CardNav title="Contact" uri="/contact" />
                <CardNav title="Accessibilité" uri="/accessibility" />
              </nav>
            );
          case "admin":
            return (
              <nav>
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
            return renderSlidesNative(categories, "category");
          case "proclamation":
            return renderSlidesNative(proclamations, "proclamation");
          default:
            return <p>Type non reconnu.</p>;
        }
      })()}
    </section>
  );
}
