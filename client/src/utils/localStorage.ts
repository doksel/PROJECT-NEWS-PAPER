export const setData = (key: string, data: string) => {
  if ("localStorage" in window) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const getData = (key: string) => {
  if ("localStorage" in window) {
    const data: string | null = localStorage.getItem(key);

    return data ? JSON.parse(data) : null;
  }
};

export const removeData = (key: string) => {
  if ("localStorage" in window) {
    localStorage.removeItem(key);
  }
};
