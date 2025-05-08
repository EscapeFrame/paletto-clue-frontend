import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from '../pages/home';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/class" element={<Class />} /> */}
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
