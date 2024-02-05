import "./App.css";
import Hero from "./component/Hero";
import { motion } from "framer-motion";
import useMousePos from "./hooks/useMousePos";
import FireFly from "./component/FireFly";
import useMouseDir from "./hooks/useMouseDir";

function App() {
  const { x, y } = useMousePos();
  const { dir } = useMouseDir();

  return (
    <div className="relative overflow-hidden">
      <motion.div
        style={{ x, y, rotate: dir }}
        transition={{ type: "tween" }}
        translate={{}}
        className={`absolute z-[100] rounded-ful`}
      >
        <FireFly width={"28"} height={"28"} />
      </motion.div>
      <Hero />
    </div>
  );
}

export default App;
