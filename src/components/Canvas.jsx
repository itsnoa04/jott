import p5 from 'p5'
import React, { useEffect } from 'react'
import getWindowDimensions from '../lib/getWindowDimensions'
import './Canvas.css'

const Canvas = () => {
	const p5node = React.useRef(null)	//references the p5 canvas

	useEffect(() => {
		//every time the window is rendered a new p5 sketch is created

		//gets the window dimensions
		const {height , width} = getWindowDimensions();

		//creates a new p5 sketch
		const sketch = (p) => {
			p.setup = () => {
				p.createCanvas(width*4,height*4) // dimensions are multiplied by 4 to make the canvas streatch upto 0.25x chrome zoom
			}
			p.draw = () => {
				p.background(30)
			}
		}

		//creates a new p5 instance
		// p5node.current is the ref to the p5 canvas
		new p5(sketch, p5node.current)
	})


  return (
	  <div className="container">
		  <div ref={p5node}></div>
	  </div>
  )
}

export default Canvas