import { Container, Title, Wave } from "@atoms/index";
import { SectionGrid } from "@organisms/index";
import { useEffect } from "react";

export default function AdminHome() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <Container>
      <Wave />
      <Title>Bienvenue sur le tableau de bord Admin</Title>
      <Wave />
      <SectionGrid type="admin" />
    </Container>

  )
}
