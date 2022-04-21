import './App.css';
import { Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar";
import { Home } from "./routes/Home";
import { Header } from "./components/Header"
import { Article } from "./routes/Article"


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
