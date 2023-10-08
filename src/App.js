import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Home/>
    </div>
  );
}

export default App;
