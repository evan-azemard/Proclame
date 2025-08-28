import { Button, Wave } from "@atoms/index";
import { TitleWithParagraph } from "@molecules/index";

export default function PrivacyPolicy() {
  return (
    <>
      <Wave />
      <TitleWithParagraph title="Politique de confidentialité">
        <p>
          L’application collecte uniquement les données nécessaires à son bon
          fonctionnement, notamment votre nom d’utilisateur et votre adresse
          email lors de l’inscription.
        </p>
        <p>
          Ces informations sont utilisées pour vous identifier, personnaliser
          votre expérience et assurer la sécurité du service.
        </p>
        <p>
          Aucune donnée n’est vendue ou partagée avec des tiers.
          <br />
        </p>
        <p>
          Les informations sont stockées de manière sécurisée et supprimées
          automatiquement à la déconnexion ou sur demande.
        </p>
        <p>
          Vous pouvez supprimer votre compte à tout moment depuis la page
          “Profil”.
        </p>
        <p>
          Il est également possible de demander une copie de vos données
          personnelles par email, directement depuis cette même page.
        </p>
        <p>
          Des cookies essentiels sont utilisés pour maintenir votre session
          active. Leur suppression via l’application entraînera une déconnexion
          immédiate.
        </p>
        <p>
          Certains contenus affichés, comme les textes bibliques, sont libres de
          droits.
        </p>
        <p>
          En revanche, l’interface, les fonctionnalités et les données liées à
          votre compte ne peuvent être réutilisées sans autorisation.
        </p>
        <p>Cette politique peut être modifiée à tout moment, sans préavis.</p>
        <p>
          En continuant à utiliser l’application, vous acceptez les éventuelles
          mises à jour.
        </p>
      </TitleWithParagraph>
      <div className="flex-end">
        <Button text="Je ne suis pas d’accord" />
      </div>
    </>
  );
}
