import './App.css';
import Landing from './landing/Landing';
import Navbar from './navbar/Navbar';
import Box from '@mui/material/Box';
import MoviesDiscovery from './sidePages/MoviesDiscovery.jsx';
import TvDiscovery from './sidePages/TvDiscovery.jsx';
import { Routes, Route, Outlet } from 'react-router-dom';

function Layout() {
  return (
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
          <Outlet />
        </Box>
      </Box>
  );
}

function App() {
  return (
    <div className="App" >
      {/* Routes */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Landing />}/>
          <Route path='/movies' element={<MoviesDiscovery />}/>  
          <Route path='/tv' element={<TvDiscovery />} />
        </Route>
      </Routes>
      {/* === Routes === */}
    </div>
  )
}

export default App;
