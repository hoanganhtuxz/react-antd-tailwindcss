import { useState, useEffect } from "react";

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  // Hàm để lấy giá trị từ localStorage
  const readValue = (): T => {
    // Kiểm tra nếu đang chạy trên browser
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      // Lấy giá trị từ localStorage
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  // State để lưu trữ giá trị hiện tại
  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Hàm cập nhật cả state và localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Cho phép giá trị là một hàm như useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Lưu vào state
      setStoredValue(valueToStore);

      // Lưu vào localStorage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));

        // Kích hoạt sự kiện storage để các components khác có thể lắng nghe
        window.dispatchEvent(new Event("local-storage"));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Lắng nghe sự thay đổi từ các tabs/windows khác
  useEffect(() => {
    const handleStorageChange = () => {
      setStoredValue(readValue());
    };

    // Lắng nghe sự kiện storage
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("local-storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("local-storage", handleStorageChange);
    };
  }, []);

  return [storedValue, setValue];
}

export default useLocalStorage;
