import React from "react";
import First from "./components/first";
import Second from "./components/second";
import backgroundImage from "./3387243.jpg";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
    >
      <First />
      <Second />
    </Box>
  );
}

export default App;
