// import { Link } from 'react-router-dom'

// export default function Navbar(){
//   return (
//     <nav className="bg-white shadow">
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         <Link to="/" className="text-2xl font-bold text-sky-600">MindEase</Link>
//         <div className="space-x-4">
//           <Link to="/" className="text-gray-700 hover:text-sky-600">Home</Link>
//           <Link to="/chat" className="text-gray-700 hover:text-sky-600">Chat</Link>
//         </div>
//       </div>
//     </nav>
//   )
// }


import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-amber-800">MindEase</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg">
          <a href="/" className="hover:text-amber-600">
            Home
          </a>
          <a href="/about" className="hover:text-amber-600">
            About
          </a>
          <a href="/chat" className="hover:text-amber-600">
            Chat
          </a>
          <a href="/blog" className="hover:text-amber-600">
            Blog
          </a>
          <a href="/support" className="hover:text-amber-600">
            Support
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </>
  );
}
