/* eslint-disable jsx-a11y/no-static-element-interactions */
// @ts-nocheck

import { useRef, useEffect, ReactNode } from "react";

interface DraggableType {
  defaultPost: { x: number; y: number };
  children: ReactNode;
}

function Draggable({ defaultPost, children }: DraggableType) {
  const ref = useRef<HTMLDivElement | null>(null);
  const dragProps = useRef<MouseEvent | null>(null);

  useEffect(() => {
    ref.current.style.transform = `translate(${defaultPost.x}px, ${defaultPost.y}px)`;
  }, [defaultPost.x, defaultPost.y]);

  const startDragging = ({ clientX, clientY }: { clientX: number; clientY: number }) => {
    if (clientX < window.innerWidth) {
      if (ref.current && dragProps.current) {
        ref.current.style.transform = `translate(
          ${dragProps.current.dragStartLeft + clientX - dragProps.current.dragStartX}px, 
          ${dragProps.current.dragStartTop + clientY - dragProps.current.dragStartY}px)`;
      }
    }
  };

  const stopDragging = () => {
    window.removeEventListener("mousemove", startDragging, false);
    window.removeEventListener("mouseup", stopDragging, false);
  };

  const initializeDrag = (event: any) => {
    const { clientX, clientY } = event;
    const target = event.target as HTMLDivElement;
    const { offsetTop, offsetLeft } = target;
    if (ref.current) {
      const { left, top }: { left: number; top: number } = ref.current.getBoundingClientRect();
      dragProps.current = {
        dragStartLeft: left - offsetLeft,
        dragStartTop: top - offsetTop,
        dragStartX: clientX,
        dragStartY: clientY,
      };
      window.addEventListener("mousemove", startDragging, false);
      window.addEventListener("mouseup", stopDragging, false);
    }
  };

  return (
    <div ref={ref} onMouseDown={initializeDrag} style={{ position: "absolute" }}>
      {children}
    </div>
  );
}

export default Draggable;
