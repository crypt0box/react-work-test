import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/component/page/Home';
import { ApiPage } from '@/component/page/Api';

const About: React.FC = () => {
  return <h2>About</h2>;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/api" element={<ApiPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
