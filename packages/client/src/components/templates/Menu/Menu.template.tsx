import { SectionGrid } from "@organisms/index";
import { Container } from "@atoms/index";
import { useAuthStore } from "@store/authStore";
import { useEffect } from "react";

export default function Menu() {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <SectionGrid type={!isLoggedIn ? "menu" : "menuGuest"} />
    </Container>
  );
}
