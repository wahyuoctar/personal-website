import "./App.css";
import wahyu from "../src/assets/wahyu.jpg";
import { Box, Text } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <div>
        <Box
          borderRadius="20px"
          height="75vh"
          width="75vw"
          backgroundColor="#05386B"
          display="flex"
        >
          <Box borderRadius="20px" padding={3}>
            <img className="photo" src={wahyu} alt="me" />
          </Box>
          <Text color="white" fontWeight="bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            ullam.
          </Text>
        </Box>
      </div>
    </div>
  );
}

export default App;
