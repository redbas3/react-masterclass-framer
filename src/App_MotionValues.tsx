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
  height: 300vh;
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

const boxVariants = {
  hover: {
    scale: 1.5,
    rotateZ: 90,
  },
  click: {
    scale: 1,
    borderRadius: "100px",
  },
  drag: {
    backgroundColor: "#8c7ae6",
    transition: {
      duration: 10,
    },
  },
};

function App() {
  const x = useMotionValue(0);
  const { scrollY, scrollYProgress } = useScroll();
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(238, 0, 178), rgb(238, 0, 67)",
      "linear-gradient(135deg, rgb(0, 238, 40), rgb(111, 238, 0)",
      "linear-gradient(135deg, rgb(0, 139, 238), rgb(32, 0, 238)",
    ]
  );
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 2]);

  useEffect(() => {
    scrollY.on("change", () => {
      console.log(scrollY.get(), scaleY.get());
    });
  }, [scrollY, scaleY]);
  useEffect(() => {
    rotateZ.on("change", () => {
      console.log(rotateZ.get());
    });
  }, [rotateZ]);
  return (
    <Wrapper style={{ background: gradient }}>
      {/* <button onClick={() => x.set(299)}>click me</button> */}
      <Box style={{ x, rotateZ, scale: scaleY }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
