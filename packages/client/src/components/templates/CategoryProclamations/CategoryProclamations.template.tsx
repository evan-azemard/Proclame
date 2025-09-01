import { Breadcrumb, Wave, Container } from "@atoms/index";
import { SectionGrid } from "@organisms/index";
import { useLocation } from "react-router-dom";

export default function CategoryProclamations() {
  const location = useLocation();

  const pages = [
    { name: "Accueil", path: "/" },
    { name: "Catégorie", path: "/categories:categoryId" },
    { name: "Proclamation", path: location.pathname },
  ];

  return (
    <Container>
      <br />
      <Breadcrumb pages={pages} />
      <Wave />
      <SectionGrid type="proclamation" />
    </Container>
  );
}
