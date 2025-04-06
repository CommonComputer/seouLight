import { useState, useEffect } from "react";

function LoadingText() {
  const texts = ["typing...", "typing..", "typing..."];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 500);
    return () => clearInterval(interval);
  }, [texts.length]);

  return <p className="text-base text-gray-400">{texts[currentIndex]}</p>;
}

export default LoadingText;
