import { useEffect, useState } from "react";

const useIntersect = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
  const [isVisible, setIsVisible] = useState(false);
  const observer = new IntersectionObserver(([entry]) => {
    setIsVisible(entry.isIntersecting);
  });

  useEffect(() => {
    const el = ref.current;
    observer.observe(el as Element);

    return () => observer.disconnect();
  });

  return { isVisible };
};

export default useIntersect;
