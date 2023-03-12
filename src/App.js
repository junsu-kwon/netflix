import { Reset } from 'styled-reset';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Test from './components/Test';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Reset />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
