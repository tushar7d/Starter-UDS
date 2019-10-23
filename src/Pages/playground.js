import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Stack, Box, Text, Icon } from "../components";
import styled from 'styled-components'

let StyledEditor= styled(LiveEditor)`
  width: 100vw;
  height: 40vh;
  background-color: #000000;
  caret-color: red;
`

let StyledPre = styled(LivePreview)`
width: 100vw;
height: 60vh;
`
const scope = {Stack, Box, Text, Icon };

let code = `<Box size="100%" bg="background.1">
  <Stack height="100%" horizontal center mid>
    <Box size="100px" bg="accent.2" m="2"/>
    <Box size="100px" bg="accent.2" m="2"/>
    <Box size="100px" bg="accent.2" m="2"/>
    <Box size="100px" bg="accent.2" m="2"/>
  </Stack>
</Box>
`

const Playground = () => {
  return (
    <LiveProvider scope={scope} code={code}>
      <StyledPre />
      <LiveError />
      <StyledEditor  padding={10}/>
    </LiveProvider>
  );
};

export default Playground;
