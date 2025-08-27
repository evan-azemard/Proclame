import { FooterNav, HeaderNav } from "@molecules/index";
import { SectionForm, SectionGrid } from "@organisms/index";
import { BrowserRouter, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <main>
        <SectionForm type="login" />
        <SectionGrid type="menu" />
        <SectionGrid type="admin" />
        <SectionGrid type="category" />
        <SectionGrid type="proclamation" />
      </main>
      <FooterNav />
    </BrowserRouter>
  );
}
