import { Container, MultiInput, Wave, Button, Title } from "@atoms/index";
import { useEffect } from "react";

export default function Accessibility() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <Container>
      <Wave />
      <form>
        <MultiInput
          type="select"
          name="fontFamily"
          label="Choix de la police"
          placeholder="Défaut"
          options={["Lexend", "OpenDyslexic", "OpenSans", "Verdana"]}
        />
        <MultiInput
          type="select"
          name="fontSize"
          label="Taille de la police"
          placeholder="Défaut"
          options={["17", "18", "19", "20"]}
        />
        <MultiInput
          type="select"
          name="fontColor"
          label="Couleur de la police"
          placeholder="Défaut"
          options={["Noir", "Blanc", "Bleu", "Rouge", "Vert"]}
        />
        <MultiInput
          type="select"
          name="backgroundColor"
          label="Couleur de fond"
          placeholder="Défaut"
          options={["Blanc", "Noir", "Gris clair", "Gris foncé"]}
        />
        <MultiInput
          type="select"
          name="mainColor"
          label="Couleur principale"
          placeholder="Défaut"
          options={["Bleu", "Rouge", "Vert", "Orange", "Violet"]}
        />
        <Wave />
        <Title type={2}>Modes d’accessibilité</Title>
        <br />

        <MultiInput type="switch" name="seniorMode" label="Mode senior" />
        <MultiInput type="switch" name="daltonianMode" label="Mode daltonien" />
        <MultiInput type="switch" name="contrastMode" label="Mode contrasté" />
        <Wave />
        <Title type={3}>Thème</Title>
        <br />
        <MultiInput
          type="switch"
          name="darkTheme"
          label="Thème sombre / clair"
        />
        <Wave />
        <Button text="Réinitialiser" />
      </form>
    </Container>
  );
}
