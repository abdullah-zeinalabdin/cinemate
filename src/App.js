import './App.css';
import Landing from './landing/Landing';
import Navbar from './navbar/Navbar';
import Box from '@mui/material/Box';


function App() {
  return (
    <div className="App" >
      <Box sx={{
        minHeight: '100vh',
        display: 'flex',
        bgcolor: 'background.default',
      }}>
        <Box 
          sx={{
            width: {xs: 72, sm: 280},
            flexShrink: 0,
            boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.6)',
            transition: '0.3s',
            '&:hover': {
              boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 8px 30px rgba(0,0,0,0.8)'
            }
          }}
        >
          <Navbar />
        </Box>
        <Box sx={{ flexGrow: 1, overflowY: 'auto'}}>
          <Landing />
        </Box>
      </Box>
    </div>
  );
}

export default App;
