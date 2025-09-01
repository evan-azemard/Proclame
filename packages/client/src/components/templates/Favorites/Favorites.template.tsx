import { Wave, Container } from "@atoms/index";
import { SectionGrid } from "@organisms/index";
import { useEffect } from "react";

export default function Favorites() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <Container>
      <Wave />
      <SectionGrid type="proclamation" />
    </Container>
  );
}
