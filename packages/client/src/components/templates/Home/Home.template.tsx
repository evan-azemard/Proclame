import { Button, Container, Wave } from "@atoms/index";
import { TitleWithParagraph } from "@molecules/index";
import { SectionGrid } from "@organisms/index";
import { useAuthStore } from "@store/authStore";
import { useEffect } from "react";

export default function Home() {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const userName = useAuthStore((s) => s.user?.pseudo ?? "utilisateur");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Wave />
      {!isLoggedIn ? (
        <TitleWithParagraph title="Bienvenue sur Proclame">
          <p>
            Un espace pensé pour le calme, la réflexion et la paix. Pour accéder
            aux proclamations et personnaliser ton expérience, connecte-toi à
            ton compte.
          </p>
        </TitleWithParagraph>
      ) : (
        <TitleWithParagraph title={`Bonjour ${userName} !`}>
          <p>
            Nous sommes ravis de te retrouver.
          </p>
        </TitleWithParagraph>
      )}

      <Wave />
      <SectionGrid type={isLoggedIn ? "home" : "homeGuest"} />
      <Wave />
      <TitleWithParagraph title="Nouveautés">
        <p>
          Découvre les différentes catégories de proclamations et trouve celle
          qui te correspond.
        </p>
        <p>
          Ajout d'un nouveau thème : "Bien-être"
          <div className="flex-end">
            <Button text="Découvrir" to="/accessibility" />
          </div>
        </p>
      </TitleWithParagraph>
    </Container>
  );
}
