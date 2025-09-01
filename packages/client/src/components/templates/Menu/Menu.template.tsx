import { SectionGrid } from "@organisms/index";
import { Container } from "@atoms/index";
import { useAuthStore } from "@store/authStore";
import { useEffect } from "react";

export default function Menu() {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const isAdmin = useAuthStore((s) => s.user?.role === "admin");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      {isAdmin ? (
        <SectionGrid type="admin" />
      ) : (
        <SectionGrid type={!isLoggedIn ? "menu" : "menuGuest"} />
      )}
    </Container>
  );
}
