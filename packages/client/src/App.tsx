import { FooterNav, HeaderNav } from "@molecules/index";
import { BrowserRouter, useLocation } from "react-router-dom";
import RouterProvider from "./router/rooter";

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

function AppLayout() {
  const location = useLocation();
  const hideChrome = location.pathname === "/categories/6/proclamations/5";

  return (
    <>
      {!hideChrome && <HeaderNav />}
      <main>
        <RouterProvider />
      </main>
      {!hideChrome && <FooterNav />}
    </>
  );
}
