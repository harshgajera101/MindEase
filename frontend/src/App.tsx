import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Depression from "./pages/Depression";
import Anxiety from "./pages/Anxiety";
import Chat from "./pages/Chat";
import Blog from "./pages/Blog";
import Support from "./pages/Support";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/depression" element={<Depression />} />
      <Route path="/anxiety" element={<Anxiety />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}

export default App;
