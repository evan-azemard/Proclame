import { Breadcrumb, Wave } from "@atoms/index";
import { SectionGrid } from "@organisms/index";
import { useLocation } from "react-router-dom";

export default function CategoryProclamations() {
  const location = useLocation();

  const pages = [
    { name: "Accueil", path: "/" },
    { name: "Catégorie", path: "/categories" },
    { name: "Proclamation", path: location.pathname }
  ];

  return (
    <>
      <Breadcrumb pages={pages} />
      <Wave  />
      <SectionGrid type="proclamation" />
    </>
  );
}
