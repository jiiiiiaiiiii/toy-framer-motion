import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 20px;
`;

const Box = styled(motion.div)`
  height: 300px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Btn = styled(motion.button)`
  position: absolute;
  bottom: 10%;
  height: 50px;
  width: 100px;
  border-radius: 10px;
  font-size: 20px;
  &:active {
    scale: 1.5;
    color: red;
  }
`;

function App() {
  const [move, setMove] = useState(false);
  const moveCircle = () => {
    setMove(prev => !prev);
  }

  return (
    <Wrapper>
      <Grid>
        <Box />
        <Box>
          {move ? <Circle layoutId='circle'/> : null}
        </Box>
        <Box>
          {!move ? <Circle layoutId='circle'/> : null}
        </Box>
        <Box />
      </Grid>
      <Btn onClick={moveCircle}>Switch</Btn>
    </Wrapper>
  );
}

export default App;
