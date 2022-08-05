import './App.css';
import Home from './components/Home/Home.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import WaterSoftener from './components/Products/WaterSoftener'
import RO from './components/Products/RO'
import Bidet from './components/Products/Bidet'
import IceMaker from './components/Products/IceMaker'
import {ThemeProvider } from '@mui/material/styles';
import theme from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/water-softener" element={<WaterSoftener />}/>
          <Route path="/bidet" element={<Bidet />}/>
          <Route path="/ro" element={<RO />}/>
          <Route path="/ice-maker" element={<IceMaker />}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
