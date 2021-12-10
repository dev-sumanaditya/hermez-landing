import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/homePage/homePage';
import "animate.css/animate.min.css";
import Fade from 'react-reveal/Fade';


function App() {
  return (
    <Fade>
      <div className="font-plaid">
          <Routes>
              <Route path="/" element={<HomePage />}></Route>
          </Routes>
      </div>
    </Fade>
  );
}

export default App;
