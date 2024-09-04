export const setToken = (token: string) => {
  document.cookie = `token=${token}; path=/; max-age=604800; SameSite=Lax`;
};

export const getToken = (): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; token=`);
  
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
};
