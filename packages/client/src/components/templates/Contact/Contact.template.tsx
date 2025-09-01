import { Title, Wave, Container } from "@atoms/index";
import { SectionForm } from "@organisms/index";

export default function Contact() {
  return (
    <Container aria-labelledby="contact-title">
      <Wave />
      <Title type={2} id="contact-title">Une question, un retour, un mot d’encouragement ?</Title>
      <p style={{fontStyle: "italic"}} aria-describedby="contact-title">Si vous avez pris le temps d’écrire, je prendrai le temps de répondre.</p>
      <Wave />
      <SectionForm type="contact" />
    </Container>
  );
}
