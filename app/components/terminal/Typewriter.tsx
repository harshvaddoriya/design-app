"use client";

import React, { useState, useEffect, memo, useRef } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

const TypewriterComponent = ({
  text,
  speed = 20,
  delay = 0,
  onComplete
}: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const hasStarted = useRef(false);
  const onCompleteRef = useRef(onComplete);

  // Update ref when onComplete changes
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    let i = 0;
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const startTyping = () => {
      intervalId = setInterval(() => {
        setDisplayedText(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(intervalId);
          onCompleteRef.current?.();
        }
        i++;
      }, speed);
    };

    if (delay > 0) {
      timeoutId = setTimeout(startTyping, delay);
    } else {
      startTyping();
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay]);

  return <span>{displayedText}</span>;
};

const Typewriter = memo(TypewriterComponent);
Typewriter.displayName = "Typewriter";

export default Typewriter;
