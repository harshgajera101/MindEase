import {ArrowUp} from "lucide-react";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Bottom */}
      <div className="text-center py-4 border-gray-300">
        <button
          onClick={scrollToTop}
          className="mt-6 flex items-center justify-center mx-auto px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <ArrowUp size={18} className="mr-2" /> Back to Top
        </button>
      </div>
    </>
  );
}
