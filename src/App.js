import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Article } from "./routes/Article";
import { LogIn } from "./routes/LogIn";
import { NavBar } from "./components/NavBar";
import { ErrorPage } from "./components/ErrorPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/topics/:topic" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
