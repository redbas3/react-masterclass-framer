import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 80vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  width: 100%;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  transform-origin: 0 0;
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const boxVariants = {
  hover: (index: string) => ({
    scale: 1.1,
    x: index === "1" ? -15 : 15,
    y: index === "1" ? -10 : 10,
  }),
};

function App() {
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState<null | string>(null);
  return (
    <Wrapper>
      <Grid>
        <Box
          custom={"1"}
          variants={boxVariants}
          layoutId={"1"}
          onClick={() => setId("1")}
          whileHover="hover"
        ></Box>
        <Box>{!clicked ? <Circle layoutId="circle" /> : null}</Box>
        <Box>{clicked ? <Circle layoutId="circle" /> : null}</Box>
        <Box
          custom={"4"}
          variants={boxVariants}
          layoutId={"4"}
          onClick={() => setId("4")}
          whileHover="hover"
        ></Box>
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ opacity: 0, backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ opacity: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ opacity: 0, backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box
              custom={id}
              layoutId={id}
              style={{ width: 400, height: 200, backgroundColor: "white" }}
            ></Box>
          </Overlay>
        ) : null}
      </AnimatePresence>
      <button
        onClick={() => setClicked((prev) => !prev)}
        style={{
          color: !clicked ? "blue" : "orange",
          top: "50px",
          position: "relative",
        }}
      >
        Switch
      </button>
    </Wrapper>
  );
}

export default App;
