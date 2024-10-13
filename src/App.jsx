import {Route,Routes} from 'react-router-dom';
import './App.css';
import {Box} from '@mui/material';
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import ExerciseDetail from './Pages/ExerciseDetail';
import Footers from './components/Footers';
import './App.css';

function App() {


  return (
    <>
      <Box width="400px" sx={{width : {xl: '1488px'}}} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/exercise/:id" element={<ExerciseDetail/>} />
        </Routes>
        <Footers />

      </Box>
    </>
  )
}

export default App
