import './App.css';
import { Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar";
import { Home } from "./routes/Home";
import { Article } from "./routes/Article"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/topics/:topic" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
