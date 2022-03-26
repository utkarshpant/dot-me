import './App.css';
import Header from './Components/Molecules/Header';
import { Box, Typography } from './Components/Primitives';

function App() {
  return (
    <div className="App">
      <Header />
      <Box>
        <Typography>
          I’m helping build affordable,
          quality healthcare experiences for India at <em>Clinikk</em> in Bangalore.
        </Typography>
      </Box>
    </div>
  );
}

export default App;
