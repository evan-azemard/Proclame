import { Wave, Container } from "@atoms/index";
import { SectionGrid } from "@organisms/index";

export default function Favorites() {
  return (
    <Container>
      <Wave />
      <SectionGrid type="proclamation" />
    </Container>
  );
}
