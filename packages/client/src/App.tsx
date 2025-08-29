import { BrowserRouter } from "react-router-dom";
import RouterProvider from "./router/rooter";
import RootLayout from "./layouts/RootLayout";

export default function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <RouterProvider />
      </RootLayout>
    </BrowserRouter>
  );
}
