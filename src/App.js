import './App.css';
import { Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar";
import { Home } from "./routes/Home";
import { Header } from "./components/Header"


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/:topic" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
