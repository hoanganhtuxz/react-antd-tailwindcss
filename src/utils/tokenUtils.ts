import { TokenData } from "@/types/auth";

export const setToken = (tokenData: TokenData): void => {
  if (tokenData.accessToken) {
    localStorage.setItem('accessToken', tokenData.accessToken);
  }
  
  if (tokenData.refreshToken) {
    localStorage.setItem('refreshToken', tokenData.refreshToken);
  }
};

export const getToken = (): TokenData | null => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  
  if (!accessToken) {
    return null;
  }
  
  return {
    accessToken,
    refreshToken: refreshToken || undefined
  };
};

export const removeToken = (): void => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};