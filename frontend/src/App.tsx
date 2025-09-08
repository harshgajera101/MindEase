import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Chat from "./pages/Chat";
import Blog from "./pages/Blog";
import Support from "./pages/Support";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}

export default App;
