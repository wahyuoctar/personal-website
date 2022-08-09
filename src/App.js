import "./App.css";
import wahyu from "../src/public/wahyu.jpg";
import { Box, Text } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <div>
        <img src={wahyu} />
        <Box height="200px" backgroundColor="black">
          <Text color="white">Aku Ini Wahyu</Text>
        </Box>
      </div>
    </div>
  );
}

export default App;
