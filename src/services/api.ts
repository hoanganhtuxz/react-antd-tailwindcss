import axios from "axios";
import { getToken, setToken, removeToken } from "@/utils/tokenUtils";

const API_BASE_URL = "https://api.mindmaid.ai/api"; // Thay bằng API của bạn nên sử dụng env

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Thêm interceptor để tự động gắn token vào request
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token.accessToken}`;
  }
  return config;
});

// Interceptor xử lý Refresh Token khi Access Token hết hạn
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Gửi request lấy token mới
        const newToken = await refreshToken();
        setToken(newToken);

        // Gắn token mới vào headers
        api.defaults.headers.Authorization = `Bearer ${newToken.accessToken}`;
        originalRequest.headers.Authorization = `Bearer ${newToken.accessToken}`;

        return api(originalRequest);
      } catch (err) {
        console.error("Refresh token failed, logging out...");
        removeToken();
        window.location.href = '/login';
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

async function refreshToken() {
  const refreshToken = getToken()?.refreshToken;
  if (!refreshToken) throw new Error("No refresh token available");

  const response = await axios.post(`${API_BASE_URL}/auth/refresh`, { refreshToken });
  return response.data; // Trả về token mới
}

export default api;
