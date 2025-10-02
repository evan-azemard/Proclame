import api from "./axios";

type CsrfResponse = { csrfToken: string };

export const fetchCsrfToken = async (): Promise<string> => {
  const response = await api.get<CsrfResponse>("/csrf-token");
  const csrfToken = response.data.csrfToken;
  localStorage.setItem("csrfToken", csrfToken);
  return csrfToken;
};
