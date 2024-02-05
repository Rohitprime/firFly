import { motion } from "framer-motion";
import useMousePos from "../hooks/useMousePos";
import fLayer2 from "../assets/fLayer4.png";
import fLastLayer from "../assets/fLastLayer.jpg";
import useMouseDir from "../hooks/useMouseDir";
import grassAndFlower from "../assets/grassAndFlowers.png";

import FireFly from "./FireFly";
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
        className="absolute -right-5 -top-10 w-full h-full z-50 brightness-[.8] scale-150"
      />
      <div className="absolute top-[70%] left-[50%]">
        <FireFly height={"12"} width={"12"} />
      </div>
      <div className="absolute w-1/3 h-1/3 top-[37%] left-[30%] z-[101]">
        <motion.img
          style={{ x: x / 50, y: y / 50 }}
          className="w-full scale-[2]"
          src={grassAndFlower}
        />
      </div>
    </div>
  );
};

export default Hero;
