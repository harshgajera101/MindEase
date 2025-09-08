import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-sky-600">MindEase</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-sky-600">Home</Link>
          <Link to="/chat" className="text-gray-700 hover:text-sky-600">Chat</Link>
        </div>
      </div>
    </nav>
  )
}
