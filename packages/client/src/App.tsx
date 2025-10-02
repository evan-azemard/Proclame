import { BrowserRouter } from "react-router-dom";
import RouterProvider from "./router";
import RootLayout from "./layouts/RootLayout";
import { useEffect } from "react";
import { fetchCsrfToken } from "@api/csrf";

export default function App() {
  useEffect(() => {
    fetchCsrfToken().catch((error) =>
      console.error("Erreur de récupération du token CSRF :", error)
    );
  }, []);
  return (
    <BrowserRouter>
      <RootLayout>
        <RouterProvider />
      </RootLayout>
    </BrowserRouter>
  );
}
