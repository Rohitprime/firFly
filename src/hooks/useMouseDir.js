import { useEffect, useState } from "react";

const useMouseDir = () => {
  const [dir, setDir] = useState({ x: -1, y: -1, dir: "" });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (typeof dir.x != "undefined") {
        //get the change from last position to this position
        var deltaX = dir.x - e.clientX,
          deltaY = dir.y - e.clientY;

        //check which direction had the highest amplitude and then figure out direction by checking if the value is greater or less than zero
        if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) {
          setDir({
            x: e.clientX,
            y: e.clientY,
            dir: "-65deg",
          });
        } else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
          setDir({
            x: e.clientX,
            y: e.clientY,
            dir: "65deg",
          });
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
          setDir({
            x: e.clientX,
            y: e.clientY,
            dir: "0deg",
          });
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
          setDir({
            x: e.clientX,
            y: e.clientY,
            dir: "180deg",
          });
        }
      }
    });
  }, [dir]);

  return { dir: dir.dir };
};

export default useMouseDir;
