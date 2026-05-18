import { useEffect, useState } from "react";

function useTypingEffect(words, typingSpeed = 90, deletingSpeed = 45, pause = 1500) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const shouldPause = !isDeleting && displayText === currentWord;

    let timeoutId;

    if (shouldPause) {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(true);
      }, pause);

      return () => window.clearTimeout(timeoutId);
    }

    timeoutId = window.setTimeout(() => {
      setDisplayText((currentText) => {
        if (isDeleting) {
          const nextText = currentText.slice(0, -1);

          if (nextText.length === 0) {
            setIsDeleting(false);
            setWordIndex((currentIndex) => (currentIndex + 1) % words.length);
          }

          return nextText;
        }

        return currentWord.slice(0, currentText.length + 1);
      });
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => window.clearTimeout(timeoutId);
  }, [deletingSpeed, displayText, isDeleting, pause, typingSpeed, wordIndex, words]);

  return displayText;
}

export default useTypingEffect;
