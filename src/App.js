import "./App.css";
import Home from "./pages/Home/home";
import Carreira from "./pages/Carreira/Carreira";
import Voluntario from "./pages/Voluntario/voluntario";
import Hobbies from "./pages/Hobbies/Hobbies";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carreira" element={<Carreira />} />
          <Route path="/voluntario" element={<Voluntario />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </Router>
  );
}

export default App;
