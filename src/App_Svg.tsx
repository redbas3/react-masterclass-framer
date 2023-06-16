import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const BiggerBox = styled.div`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.34);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  path {
    stroke: whitesmoke;
    stroke-width: 2px;
  }
`;

const svgVars = {
  start: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  end: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

function App() {
  return (
    <Wrapper>
      <Svg
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <motion.path
          variants={svgVars}
          initial="start"
          animate="end"
          transition={{
            default: {
              duration: 5,
            },
            fill: {
              duration: 3,
              delay: 0,
            },
          }}
          d="M86.642 0L122 94.469H0l3.914-11.741L35.494 0h14.44l10.391 28.88L72.201 0h14.44zM49.934 83.942h20.783L66.803 74.9l-6.478-17.139-10.391 26.181zM43.32 9.312l-28.88 74.63h24.966l1.215-1.214 14.44-39.407-3.914-10.527-7.827-23.482zm62.89 74.63l-2.7-9.042-7.827-19.838-7.828-22.268L78.68 9.312 65.59 43.32l15.654 40.621h24.967z"
        ></motion.path>
      </Svg>
    </Wrapper>
  );
}

export default App;
