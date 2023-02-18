import { Reset } from 'styled-reset';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Reset />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
