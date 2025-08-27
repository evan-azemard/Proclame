import { Button, Wave } from "@atoms/index";
import { TitleWithParagraph } from "@molecules/index";

export default function TermsOfUse() {
  return (
    <>
      <Button isBack />
      <Wave space />
      <TitleWithParagraph title="Conditions générales d’utilisation">
        <p>
          En utilisant cette application, vous acceptez les présentes
          conditions.
        </p>
        <p>
          L’accès est gratuit, mais peut être suspendu ou modifié à tout moment
          sans préavis.
        </p>
        <p>
          Vous êtes responsable de l’usage de votre compte et de la
          confidentialité de vos identifiants.
        </p>
        <p>
          Toute utilisation frauduleuse ou tentative de copie, reproduction ou
          détournement de l’application, de son interface ou de ses
          fonctionnalités est strictement interdite et pourra entraîner des
          poursuites judiciaires.
        </p>
        <p>
          Certains contenus affichés, comme les textes bibliques, sont libres de
          droits, mais l’ensemble de la structure, du design et des
          fonctionnalités de l’application ne peut être réutilisé sans
          autorisation.
        </p>
        <p>
          Les données personnelles sont traitées conformément à notre politique
          de confidentialité, et ne sont jamais revendues.
        </p>
        <p>Les conditions d’utilisation peuvent évoluer à tout moment.</p>
      </TitleWithParagraph>
      <div className="flex-end">
        <Button text="Je ne suis pas d’accord" />
      </div>
    </>
  );
}
