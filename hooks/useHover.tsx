'use client'

import { useEffect, useRef, useState } from "react";

//ElementRef, if you know element type of component
export function useHover<T extends HTMLElement>() {
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef<T>(null);

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, isHovering];
}
