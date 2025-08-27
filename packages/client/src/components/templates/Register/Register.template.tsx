import { Button, Wave } from "@atoms/index";
import { TitleWithParagraph } from "@molecules/index";
import { SectionForm } from "@organisms/index";

export default function Register() {
  return (
    <>
      <Button isBack />
      <Wave space={true} />
      <SectionForm type="register" />
      <Wave />
      <TitleWithParagraph
        title="Conditions générales
d’utilisation"
      >
        En utilisant cette application, vous acceptez les présentes conditions.
        L’accès est gratuit, mais peut être suspendu ou modifié à tout moment
        sans préavis. Vous êtes responsable de l’usage de votre compte et de la
        confidentialité de vos identifiants. Toute utilisation frauduleuse ou
        tentative de copie, reproduction ou détournement de l’application, de
        son interface ou de ses fonctionnalités est strictement interdite et
        pourra entraîner des poursuites judiciaires. Certains contenus affichés,
        comme les textes bibliques, sont libres de droits, mais l’ensemble de la
        structure, du design et des fonctionnalités de l’application ne peut
        être réutilisé sans autorisation. Les données personnelles sont traitées
        conformément à notre politique de confidentialité, et ne sont jamais
        revendues. Les conditions d’utilisation peuvent évoluer à tout moment.
      </TitleWithParagraph>
      <div className="flex-end">
        <Button text="valider" />
      </div>
    </>
  );
}
