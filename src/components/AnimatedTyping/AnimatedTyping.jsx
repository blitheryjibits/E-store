import { useEffect, useState } from "react";

const words = [
"busy lives.",
"smart savers.",
"trendsetters.",
"special occasions.",
"every moment."
];

export default function AnimatedType() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!deleting && displayed.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, displayed.length + 1));
      }, 80);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, displayed.length - 1));
      }, 40);
    } else if (!deleting && displayed.length === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  // Blinking cursor effect
  useEffect(() => {
    const blink = setInterval(() => setCursor(c => !c), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <span>
      Making shopping easier for{" "}
      <span className="text-[#60a5fa] font-bold">
        {displayed}
        <span className="inline-block w-2">{cursor ? "|" : " "}</span>
      </span>
    </span>
  );
}