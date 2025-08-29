import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.REACT_APP_BACKEND_URL,
});

// Token interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
