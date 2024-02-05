import { motion } from "framer-motion";
import useMousePos from "../hooks/useMousePos";
import fLayer2 from "../assets/fLayer4.png";
import fLastLayer from "../assets/fLastLayer.jpg";
import useMouseDir from "../hooks/useMouseDir";
const Hero = () => {
  const { x, y } = useMousePos();
  const { dir } = useMouseDir();
  console.log(x, y, dir);
  return (
    <div className="relative w-screen h-screen overflow-visible">
      {/* <motion.img src={fLayer2} alt="forest" className="absolute z-40" /> */}
      <motion.img
        src={fLastLayer}
        alt="fLastLayer"
        className="absolute w-full h-full"
      />
      <motion.img
        style={{ x: -x / 50, y: -y / 50 }}
        src={fLayer2}
        alt="forest"
        className="absolute -right-5 -top-10 w-full h-full z-50 brightness-50"
      />
    </div>
  );
};

export default Hero;
