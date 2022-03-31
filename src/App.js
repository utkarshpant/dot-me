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
      <Box>
        <Typography>
          I’m super interested in banking and healthcare, and want to build
          better software in these spaces to help technology become
          more accessible for <strong>everybody.</strong>
        </Typography>
      </Box>
    </div>
  );
}

export default App;
