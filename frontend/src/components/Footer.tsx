
export default function Footer(){
  return (
    <footer className="bg-slate-50 text-center py-6 mt-8">
      <div className="container mx-auto text-sm text-gray-600">
        © {new Date().getFullYear()} MindEase — Not a replacement for professional care. If you are in crisis, contact local emergency services.
      </div>
    </footer>
  )
}
