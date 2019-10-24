import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Stack, Box, Text, Icon } from "../components";
import styled from "styled-components";

let StyledEditor = styled(LiveEditor)`
  width: 50vw;
  height: 100vh;
  background-color: #000000;
  caret-color: red;
`;

let StyledPre = styled(LivePreview)`
  width: 50vw;
  height: 80vh;
`;

let StyledEror = styled(LiveError)`
  background-color: midnightblue;
  color: white;
  height: 20vh;
  width: 50vw;
  margin: 0;
`;
const scope = { Stack, Box, Text, Icon };

let code = `<Box size="100%" bg="background.1">
  <Stack height="100%" horizontal center mid>
    <Box size="100px" bg="accent.2" m="2"/>
    <Box size="100px" bg="accent.2" m="2"/>
    <Box size="100px" bg="accent.2" m="2"/>
    <Box size="100px" bg="accent.2" m="2"/>
  </Stack>
</Box>
`.trim();

const Playground = () => {
  return (
    <LiveProvider scope={scope} code={code}>
      <Stack width="100vw" height="100vh" horizontal top split>
        <Stack>
          <StyledEditor />
        </Stack>
        <Stack>
          <StyledPre />
          <StyledEror />
        </Stack>
      </Stack>
    </LiveProvider>
  );
};

export default Playground;
