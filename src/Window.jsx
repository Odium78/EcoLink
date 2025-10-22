import { useState } from "react";

function Window({ desc }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openWindow = () => {
    setIsVisible(true);
    setTimeout(() => setIsOpen(true), 10);
  };

  const closeWindow = () => {
    setIsOpen(false);
    setTimeout(() => setIsVisible(false), 250);
  };

  return (
    <>
      {/* Button to open overlay */}
      <button onClick={openWindow} className="window">
        Open Case Studies
      </button>

      {/* Overlay */}
      {isVisible && (
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeWindow}
        >
          {/* Modal content */}
          <div
            className={`bg-zinc-900/90 text-white rounded-2xl p-8 w-11/12 max-w-2xl shadow-2xl transform transition-all duration-300 ease-out ${
              isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-2xl font-bold mb-4">Case Studies</h1>
            <p className="whitespace-pre-line text-zinc-300 leading-relaxed mb-6" dangerouslySetInnerHTML={{__html: desc}}/>

            <div className="flex justify-end">
              <button
                onClick={closeWindow}
                className="px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Window;
