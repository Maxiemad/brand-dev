import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if device supports touch (iOS devices)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Don't show custom cursor on touch devices
    if (isTouchDevice) {
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;
    let animationFrame: number;
    let firstMove = true;

    const updateMousePosition = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (firstMove) {
        cursorX = mouseX;
        cursorY = mouseY;
        dotX = mouseX;
        dotY = mouseY;
        setVisible(true);
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${cursorX - 9}px, ${cursorY - 9}px)`;
        }
        if (dotRef.current) {
          dotRef.current.style.transform = `translate(${dotX - 3.5}px, ${dotY - 3.5}px)`;
        }
        firstMove = false;
      }
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.22;
      cursorY += (mouseY - cursorY) * 0.22;
      dotX += (mouseX - dotX) * 0.38;
      dotY += (mouseY - dotY) * 0.38;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX - 9}px, ${cursorY - 9}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX - 3.5}px, ${dotY - 3.5}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', updateMousePosition);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[18.4px] h-[18.4px] bg-[#FFA947] rounded-full opacity-90 z-50 pointer-events-none transition-transform duration-150"
        style={{
          willChange: 'transform',
          transition: 'transform 0.15s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[7.4px] h-[7.4px] bg-black rounded-full z-50 pointer-events-none"
        style={{
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default CustomCursor;