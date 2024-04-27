import React from "react";

// Import SVG components
import { ReactComponent as Option1SVG } from "./frontTooth_default.svg";
import { ReactComponent as Option2SVG } from "./frontTooth_no.svg";
import { ReactComponent as Option3SVG } from "./frontTooth_crack.svg";
import { ReactComponent as Option4SVG } from "./frontTooth_default.svg";
import { ReactComponent as Option5SVG } from "./frontTooth_cavity_left.svg";
import { ReactComponent as Option6SVG } from "./frontTooth_cavity_right.svg";
import { ReactComponent as Option7SVG } from "./frontTooth_cavity_top.svg";
import { ReactComponent as Option8SVG } from "./frontTooth_cavity_down.svg";
import { ReactComponent as Option9SVG } from "./frontTooth_cavity_between_top.svg";
import { ReactComponent as Option10SVG } from "./frontTooth_cavity_between_down.svg";

const FrontToothSVGs = ({ selectedOption }) => {
  // Define the SVG components for the tooth options
  const BackToothSVGs = {
    default: <Option1SVG style={{ width: "100px", height: "100px" }} />,
    no: <Option2SVG style={{ width: "100px", height: "100px" }} />,
    crack_: <Option3SVG style={{ width: "100px", height: "100px" }} />,
    cavity_1: <Option4SVG style={{ width: "100px", height: "100px" }} />,
    cavity_2: <Option5SVG style={{ width: "100px", height: "100px" }} />,
    cavity_3: <Option6SVG style={{ width: "100px", height: "100px" }} />,
    cavity_4: <Option7SVG style={{ width: "100px", height: "100px" }} />,
    cavity_5: <Option8SVG style={{ width: "100px", height: "100px" }} />,
    cavity_6: <Option9SVG style={{ width: "100px", height: "100px" }} />,
    cavity_7: <Option10SVG style={{ width: "100px", height: "100px" }} />,
  };

  return <div>{BackToothSVGs[selectedOption] || BackToothSVGs.default}</div>;
};

export default FrontToothSVGs;
