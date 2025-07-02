import React, { useRef, useState, useEffect } from "react";

function useFadeIn(ref, delay = 0) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return {
    ref,
    style: {
      transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
    },
  };
}

export default function Section({ id, children }) {
  const ref = useRef(null);
  const animation = useFadeIn(ref, 200);

  return (
    <section
      id={id}
      {...animation}
      className="min-h-[60vh] px-6 py-20 md:py-28 max-w-5xl mx-auto"
    >
      {children}
    </section>
  );
}
