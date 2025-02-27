import { useEffect, useRef, RefObject } from "react";

function useClickOutside<T extends HTMLElement = HTMLElement>(
  handler: (event: MouseEvent | TouchEvent) => void
): RefObject<T | null> {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent): void => {
      // Không làm gì nếu ref không tồn tại hoặc click vào ref element
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    // Đăng ký các sự kiện
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup: loại bỏ event listener khi component bị unmount
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);

  return ref;
}

export default useClickOutside;
