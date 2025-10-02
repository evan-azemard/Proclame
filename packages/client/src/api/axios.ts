// Définit une instance Axios avec une URL de base et des configurations par défaut
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use(async (config) => {
  const methodsRequiringCsrf = ["post", "put", "patch", "delete"];
  if (methodsRequiringCsrf.includes(config.method || "")) {
    const csrfToken = localStorage.getItem("csrfToken");
    if (csrfToken) {
      config.headers["X-CSRF-Token"] = csrfToken;
    }
  }
  return config;
});

export default api;
