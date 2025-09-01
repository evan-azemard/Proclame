import { Button, Wave, Container } from "@atoms/index";
import { TitleWithParagraph } from "@molecules/index";

export default function LegalNotice() {
  return (
    <Container aria-labelledby="legal-notice-title">
      <Wave />
      <TitleWithParagraph title="Mention légales" titleId="legal-notice-title">
        <p>
          <strong>Éditeur de l’application</strong>
          <br />
          Cette application est éditée par Evan Azemard, développeur.
        </p>

        <p>
          <strong>Localisation :</strong> Croix, Hauts-de-France, France
          <br />
          <strong>Contact :</strong> evan.azemard.dev@gmail.com
        </p>

        <p>
          <strong>Responsable de la publication</strong>
          <br />
          Evan Azemard.
        </p>

        <p>
          <strong>Hébergement</strong>
          <br />
          L’application est hébergée par plusieurs prestataires techniques :
        </p>

        <p>
          <strong>Interface utilisateur :</strong> Vercel Inc., 440 N Barranca
          Ave #4133, Covina, CA 91723, USA.
        </p>

        <p>
          <strong>Serveur applicatif :</strong> Railway Inc., 548 Market St, San
          Francisco, CA 94104, USA.
        </p>

        <p>
          <strong>Base de données :</strong> Supabase Inc., 8 Kallang Avenue,
          Aperia Tower 1, Singapore 339509.
        </p>

        <p>
          <strong>Propriété intellectuelle</strong>
          <br />
          Tous les éléments de l’application (code, design, contenus) sont
          protégés par le droit d’auteur. Toute reproduction ou utilisation non
          autorisée est interdite. Les textes bibliques affichés sont libres de
          droits ou utilisés conformément aux licences ouvertes.
        </p>

        <p>
          <strong>Données personnelles</strong>
          <br />
          Les données collectées sont utilisées uniquement pour le bon
          fonctionnement de l’application. Vous pouvez consulter la politique de
          confidentialité et exercer vos droits via les pages dédiées.
        </p>

        <p>
          <strong>Cookies et conditions d’utilisation</strong>
          <br />
          Des cookies techniques peuvent être utilisés pour améliorer
          l’expérience utilisateur.
        </p>
      </TitleWithParagraph>
      <div className="flex-end" aria-label="Liens connexes mentions légales">
        <Button text="CGU" to="/terms-of-use" />
        <Button text="COOKIES" to="/cookies-policy" />
        <Button text="PDC" to="/privacy-policy" />
      </div>
    </Container>
  );
}
