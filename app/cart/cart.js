// counter.js
let counter = 1;

export function incrementCounter() {
  counter++;
  updateCounterDisplay();
}

export function decrementCounter() {
  if (counter > 0) {
    counter--;
    updateCounterDisplay();
  }
}

function updateCounterDisplay() {
  const counterDisplay = document.querySelector("#counterDisplay");
  if (counterDisplay) {
    counterDisplay.textContent = counter;
  }
}


export function Tooltip({ text }) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="relative inline-block">
            <button
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                onClick={() => setIsVisible(!isVisible)}
                className="text-gray-500"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                >
                    <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            {isVisible && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-black text-white text-xs rounded-lg shadow-lg py-2 px-4">
                    {text}
                </div>
            )}
        </div>
    );
}