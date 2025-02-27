import { useState, useEffect } from "react";

function useMediaQuery(query: string): boolean {
  // Hàm để lấy trạng thái khớp media query
  const getMatches = (query: string): boolean => {
    // Kiểm tra nếu chạy trên browser
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  // Effect để theo dõi sự thay đổi của media query
  useEffect(() => {
    // Hàm xử lý sự kiện khi media query thay đổi
    function handleChange() {
      setMatches(getMatches(query));
    }

    // Lắng nghe sự kiện thay đổi
    const matchMedia = window.matchMedia(query);

    // Kích hoạt ngay lập tức để đồng bộ state
    handleChange();

    // Đăng ký event listener
    if (matchMedia.addListener) {
      // Cách cũ (Safari)
      matchMedia.addListener(handleChange);
    } else {
      // Cách mới
      matchMedia.addEventListener("change", handleChange);
    }

    // Cleanup function
    return () => {
      if (matchMedia.removeListener) {
        // Cách cũ (Safari)
        matchMedia.removeListener(handleChange);
      } else {
        // Cách mới
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);

  return matches;
}

 // Đối tượng chứa các breakpoints phổ biến
 
export const breakpoints = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1400px)",
};

export default useMediaQuery;
