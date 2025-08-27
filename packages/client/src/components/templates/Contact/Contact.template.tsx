import { Button, Title, Wave } from "@atoms/index";
import { SectionForm } from "@organisms/index";

export default function Contact() {
  return (
    <>
      <Button isBack />
      <Wave space />
      <Title>Une question, un retour, un mot d’encouragement ?</Title>
      <br/>
      <br/>
      <p>Si vous avez pris le temps d’écrire, je prendrai le temps de répondre.</p>
      <Wave />
      <SectionForm type="contact" />
    </>
  );
}
