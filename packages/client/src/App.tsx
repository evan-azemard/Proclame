import { FooterNav, HeaderNav } from "@molecules/index";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <main>

      </main>
      <FooterNav />
    </BrowserRouter>
  );
}
