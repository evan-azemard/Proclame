import { useAuthStore } from "@store/authStore";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }: {children: React.ReactNode}) {
    const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
    return isLoggedIn ? <>{children}</> : <Navigate to='/login' replace />
}

