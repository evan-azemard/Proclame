import { Title, Wave, Container } from "@atoms/index";
import { SectionForm } from "@organisms/index";
import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <Container aria-labelledby="contact-title">
      <Wave />
      <Title type={2} id="contact-title">Une question, un retour, un mot d’encouragement ?</Title>
      <p style={{fontStyle: "italic", marginTop: "15px"}} aria-describedby="contact-title">Si vous avez pris le temps d’écrire, je prendrai le temps de répondre.</p>
      <Wave />
      <SectionForm type="contact" />
    </Container>
  );
}
