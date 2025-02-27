import { LoginCredentials, LoginResponse, User } from "@/types/auth";
import { removeToken } from "@/utils/tokenUtils";
import api from "./api";

export const authService = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await api.post("/auth/login/", credentials);
    return response.data;
  },

  logout: async (): Promise<void> => {
    removeToken();

    // try {
    //   const token = getToken();
    //   if (token?.refreshToken) {
    //     // Gọi API logout (nếu server cần invalidate token)
    //     await api.post('/auth/logout', { refreshToken: token.refreshToken });
    //   }
    // } finally {
    //   // Luôn xóa token khỏi localStorage
    // }
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await api.get("/get-info-user");
    return response.data;
  },
};
