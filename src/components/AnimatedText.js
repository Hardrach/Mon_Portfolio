import React, { useEffect, useRef } from 'react';
import './AnimatedText.css';

const AnimatedText = ({ text, type = 'gradient', className = '' }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (type === 'glitch') {
      const text = textRef.current;
      const letters = text.textContent.split('');
      text.textContent = '';
      
      letters.forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${i * 0.1}s`;
        text.appendChild(span);
      });
    }
  }, [type]);

  const renderText = () => {
    switch (type) {
      case 'gradient':
        return (
          <span ref={textRef} className={`animated-text gradient-text ${className}`}>
            {text}
          </span>
        );
      case 'glitch':
        return (
          <span ref={textRef} className={`animated-text glitch-text ${className}`}>
            {text}
          </span>
        );
      case 'typing':
        return (
          <span ref={textRef} className={`animated-text typing-text ${className}`}>
            {text}
          </span>
        );
      default:
        return (
          <span ref={textRef} className={`animated-text ${className}`}>
            {text}
          </span>
        );
    }
  };

  return renderText();
};

export default AnimatedText; 