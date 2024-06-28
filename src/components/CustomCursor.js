import React, { useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    const addHoverEffect = () => cursor.classList.add('hover-effect');
    const removeHoverEffect = () => cursor.classList.remove('hover-effect');

    window.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseover', addHoverEffect);
      el.addEventListener('mouseout', removeHoverEffect);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseover', addHoverEffect);
        el.removeEventListener('mouseout', removeHoverEffect);
      });
    };
  }, []);

  return <div className='custom-cursor'></div>;
};

export default CustomCursor;
