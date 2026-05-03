import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Use pointer/hover media only — NOT maxTouchPoints. Hybrid laptops (touch + mouse)
    // report touch capability but still use a fine pointer; excluding them left cursor:none
    // from index.html with no custom cursor (invisible pointer on the page).
    const supportsHover = window.matchMedia('(hover: hover)').matches;
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const useCustomCursor = supportsHover && hasFinePointer;

    if (!useCustomCursor) {
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

  // Handle media query changes
  useEffect(() => {
    const handleMediaChange = () => {
      const supportsHover = window.matchMedia('(hover: hover)').matches;
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      const useCustomCursor = supportsHover && hasFinePointer;

      if (!useCustomCursor) {
        setVisible(false);
      }
    };

    const hoverMediaQuery = window.matchMedia('(hover: hover)');
    const pointerMediaQuery = window.matchMedia('(pointer: fine)');
    
    hoverMediaQuery.addEventListener('change', handleMediaChange);
    pointerMediaQuery.addEventListener('change', handleMediaChange);
    
    return () => {
      hoverMediaQuery.removeEventListener('change', handleMediaChange);
      pointerMediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[18.4px] h-[18.4px] bg-[#FFA947] rounded-full opacity-90 pointer-events-none transition-transform duration-150"
        style={{
          willChange: 'transform',
          zIndex: 2147483647,
          transition: 'transform 0.15s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[7.4px] h-[7.4px] bg-black rounded-full pointer-events-none"
        style={{
          willChange: 'transform',
          zIndex: 2147483647,
        }}
      />
    </>
  );
};

export default CustomCursor;