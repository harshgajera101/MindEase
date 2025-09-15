import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="text-center py-6">
      <button
        onClick={scrollToTop}
        className="inline-flex items-center space-x-2 px-6 py-3 border border-amber-200 text-amber-700 rounded-full hover:bg-amber-50 hover:border-amber-300 transition-all duration-200 shadow-sm hover:shadow-md"
      >
        <ArrowUp size={18} />
        <span className="font-medium">Back to Top</span>
      </button>
    </div>
  );
}