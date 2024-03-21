import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import SynonymizerPage from './pages/synonymizer';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/synonymizer" element={<SynonymizerPage />} />
      </Routes>
  );
}

export default App;
