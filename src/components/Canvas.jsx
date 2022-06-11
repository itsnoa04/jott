// import p5 from "p5";
// import React, { useEffect, useRef } from "react";
// import getWindowDimensions from "../lib/getWindowDimensions";
// import "./Canvas.css";

// const Canvas = () => {
//   const p5node = useRef(null); //references the p5 canvas
//   const p5instance = useRef(null); //references the p5 instance
//   const lines = useRef([]); //references the lines array

//   const newline = (p5instance) => {
//     const px = p5instance.pwinMouseX;
//     const py = p5instance.pwinMouseY;
//     const x = p5instance.mouseX;
//     const y = p5instance.mouseY;
//     p5instance.stroke(255);
//     p5instance.line(px, py, x, y);
//   };

//   useEffect(() => {
//     //every time the window is rendered a new p5 sketch is created

//     //gets the window dimensions
//     const { height, width } = getWindowDimensions();

//     //creates a new p5 sketch
//     // const sketch = (p) => {
//     //   p.setup = () => {
//     //     p.createCanvas(width * 4, height * 4); // dimensions are multiplied by 4 to make the canvas streatch upto 0.25x chrome zoom
//     //   };
//     //   p.draw = () => {
//     //     p.background(100);

//     //     if (p.mouseIsPressed) {
//     //       lines.current.push(newline(p5instance.current));
//     //     }

//     //     for (var line of lines.current) {
//     //       // console.log(line);
//     //     }
//     //   };
//     };

//     //creates a new p5 instance
//     // p5node.current is the ref to the p5 canvas
//     p5instance.current = new p5(sketch, p5node.current);
//   });

//   return (
//     <div className="container">
//       <div ref={p5node}></div>
//     </div>
//   );
// };

// export default Canvas;

import React, { useContext } from "react";
import useOnDraw from "../lib/useOnDraw";
import useWindowDimensions from "../lib/useWindowDimensions";
import "./Canvas.css";
import StyleContext from "../context/StyleContext";

const Canvas = () => {
  const { color, thickness } = useContext(StyleContext);

  const onDraw = (ctx, point, prevPoint) => {
    DrawLine(ctx, prevPoint, point);
  };

  const DrawLine = (ctx, start, end) => {
    start = start ?? end;
    ctx.beginPath();
    ctx.lineWidth = thickness;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(start.x, start.y, thickness / 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  const onStop = (ctx) => {
    ctx.endPath();
  };

  const { height, width } = useWindowDimensions();
  const setCanvasRef = useOnDraw(onDraw, onStop);
  return (
    <div className="container">
      <canvas
        width={width}
        height={height}
        ref={setCanvasRef}
        style={{
          border: "1px solid black",
        }}
      />
    </div>
  );
};

export default Canvas;
