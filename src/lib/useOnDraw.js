import { useEffect, useRef } from "react";

export default function useOnDraw(onDraw, onStop) {
  const canvasRef = useRef(null);
  const isMousePressed = useRef(false);
  const mouseMoveListenerRef = useRef(null);
  const mousePressListenerRef = useRef(null);
  const mouseReleaseListenerRef = useRef(null);
  const prevPointRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    //cleanup
    return () => {
      if (mouseMoveListenerRef.current) {
        window.removeEventListener("mousemove", mouseMoveListenerRef.current);
      }
      if (mousePressListenerRef.current) {
        window.removeEventListener("mousedown", mousePressListenerRef.current);
      }
    };
  }, []);

  const setCanvasRef = (ref) => {
    if (!ref) return;
    if (canvasRef.current) {
      canvasRef.current.removeEventListener(
        "mousedown",
        mouseReleaseListenerRef.current
      );
    }
    canvasRef.current = ref;
    initMouseMoveListener();
    initMousePressListener();
    initMouseReleaseListener();
  };

  const initMouseMoveListener = () => {
    const mouseMoveListener = (e) => {
      if (isMousePressed.current) {
        const point = computePointInCanvas(e.clientX, e.clientY);
        contextRef.current = canvasRef.current.getContext("2d");
        if (onDraw) onDraw(contextRef.current, point, prevPointRef.current);
        prevPointRef.current = point;
      }
    };
    window.addEventListener("mousemove", mouseMoveListener);
    mouseMoveListenerRef.current = mouseMoveListener;
  };

  const initMousePressListener = () => {
    if (!canvasRef.current) return;
    const mousePressListener = (e) => {
      isMousePressed.current = true;
    };
    canvasRef.current.addEventListener("mousedown", mousePressListener);
    mousePressListenerRef.current = mousePressListener;
  };

  const initMouseReleaseListener = () => {
    const MouseReleaseListener = (e) => {
      isMousePressed.current = false;
      prevPointRef.current = null;
      if (onStop) onStop(contextRef.current);
    };
    window.addEventListener("mouseup", MouseReleaseListener);
    mouseReleaseListenerRef.current = MouseReleaseListener;
  };

  const computePointInCanvas = (clientX, clientY) => {
    if (!canvasRef.current) return;

    const boundingRect = canvasRef.current.getBoundingClientRect();
    return {
      x: clientX - boundingRect.left,
      y: clientY - boundingRect.top,
    };
  };

  return setCanvasRef;
}
