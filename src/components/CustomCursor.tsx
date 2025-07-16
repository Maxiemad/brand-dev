import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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
          cursorRef.current.style.transform = `translate3d(${cursorX - 9}px, ${cursorY - 9}px, 0)`;
        }
        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${dotX - 3.5}px, ${dotY - 3.5}px, 0)`;
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
        cursorRef.current.style.transform = `translate3d(${cursorX - 9}px, ${cursorY - 9}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX - 3.5}px, ${dotY - 3.5}px, 0)`;
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
        className="fixed top-0 left-0 w-[18px] h-[18px] bg-black rounded-full opacity-90 z-50 pointer-events-none transition-transform duration-150"
        style={{
          willChange: 'transform',
          transition: 'transform 0.15s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[7px] h-[7px] bg-green-500 rounded-full z-50 pointer-events-none"
        style={{
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default CustomCursor;