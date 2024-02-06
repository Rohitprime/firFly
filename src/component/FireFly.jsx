import bGlow from "../assets/bGlow2.png";

import PropTypes from "prop-types";

const FireFly = () => {
  return (
    <main
      className={`w-16 h-16 relative flex flex-col items-center justify-center
      -rotate rounded-full backdrop-brightness-200`}
    >
      <img
        src={bGlow}
        alt="bGlow"
        className=" w-full h-full animate-fireFlyGlow absolute -left-2 scale-150"
      />
      {/* head wings */}

      <div
        className="w-[20%] h-[20%] absolute -top-[15%] left-[55%] border-l-2 border-blue-500 rounded-tl-[70%]
         origin-bottom-left rotate-[30deg]"
      >
        <div className="absolute w-[20%] h-[20%] rounded-full bg-yellow-600 left-[40%] top-[0%] animate-fireFlyGlow"></div>
      </div>

      <div
        className="w-[20%] h-[20%] absolute -top-[15%] right-[55%] border-r-2 border-blue-500 rounded-tr-[70%]
         origin-bottom-right -rotate-[30deg]"
      >
        <div className="absolute w-[20%] h-[20%] rounded-full bg-yellow-600 left-[38%] top-[0%] animate-fireFlyGlow"></div>
      </div>

      {/* head */}
      <div
        className="w-[15%] h-[13%] bg-blue-500 rounded-full
             mb-1 absolute top-[6%]"
      ></div>
      {/* wings */}

      <div
        className="bg-blue-500 w-4/6 h-[20%] rounded-[130%] absolute z-[100]
            top-[15%] left-[60%] origin-left animate-fireFlyWingLeft"
      ></div>

      <div
        className="bg-blue-300 w-4/6 h-[20%] rounded-[130%] absolute z-[98]
          top-[15%] left-[60%] origin-left animate-fireFlyWingLeft2"
      ></div>

      <div
        className="bg-blue-500 w-4/6 h-[20%] rounded-[130%] absolute z-[100]
         top-[15%] right-[60%] origin-right animate-fireFlyWingright"
      ></div>

      <div
        className="bg-blue-300 w-4/6 h-[20%] rounded-[130%] absolute z-[98]
         top-[15%] right-[60%] origin-right animate-fireFlyWingright2 "
      ></div>

      {/* middel body */}
      <div className="w-2/6 h-[20%] bg-blue-500 flex rounded-b-full absolute top-[20%] z-20 rounded-t-full">
        <div className="h-[80%] w-[25%] bg-[rgb(201,158,58)] rounded-br-full rounded-tl-full"></div>
        <div className="h-[80%] w-[50%] bg-blue-500"></div>
        <div className="h-[80%] w-[25%] bg-[rgb(201,158,58)] rounded-bl-full rounded-tr-full"></div>
      </div>
      {/* last glowing body */}
      <div
        className="w-2/6 h-[50%] bg-yellow-500 rounded-b-full absolute top-[30%] animate-fireFlyGlow
           "
      >
        <div className="bg-yellow-500 w-full h-[30%] rounded-b-full"></div>
      </div>
    </main>
  );
};

FireFly.prototype = {
  width: PropTypes.string,
  height: PropTypes.string,
};
export default FireFly;
