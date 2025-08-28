import { useAuthStore } from "@store/authStore";
import { Navigate } from "react-router-dom";

export function AdminRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useAuthStore((s) => s.user);
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const isAdmin = isLoggedIn && user?.role === "admin";

  if (!isLoggedIn) return <Navigate to='/login' replace />
  if (!isAdmin) return <Navigate to="/403" replace />;

  return <>{children}</>;
}
