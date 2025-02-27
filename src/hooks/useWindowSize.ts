import { useState, useEffect } from "react";

const useWindowSize = () => {
  // Khởi tạo state với giá trị mặc định
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Hàm cập nhật kích thước cửa sổ
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Thêm event listener
    window.addEventListener("resize", handleResize);

    // Gọi hàm xử lý ngay lập tức để cập nhật state ban đầu
    handleResize();

    // Cleanup: loại bỏ event listener khi component bị unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Mảng dependencies rỗng đảm bảo useEffect chỉ chạy một lần khi mount

  return windowSize;
};

export default useWindowSize;
