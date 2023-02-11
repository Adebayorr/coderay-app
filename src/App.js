import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import signUp from './pages/sign_up'


function App() {
  return (
  <div className="App">
    <Routes>
      <Route path="/" element = {<Home/>} />

    </Routes>
  </div>

  );
}

export default App;