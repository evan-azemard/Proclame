import { FooterNav, HeaderNav } from "@molecules/index";
import { BrowserRouter } from "react-router-dom";
import RouterProvider from "./router/rooter";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <main>
        <RouterProvider />
      </main>
      <FooterNav />
    </BrowserRouter>
  );
}
