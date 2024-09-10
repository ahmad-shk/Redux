import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Incriment from './pages/Incriment'; // Ensure the path is correct
import Dicriment from './pages/Dicriment'; // Ensure the path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Incriment />} />
        <Route path="/dicriment" element={<Dicriment />} />
      </Routes>
    </Router>
  );
}

export default App;
