import { useEffect, useState } from "react";

const useMousePos = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    });
  }, []);

  return { x: pos.x, y: pos.y };
};

export default useMousePos;
