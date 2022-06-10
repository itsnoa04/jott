import p5 from 'p5'
import React, { useCallback, useEffect } from 'react'
import useWindowDimensions, { getWindowDimensions } from '../lib/useWindowDimensions'
import './Canvas.css'

const Canvas = () => {
	const p5node = React.useRef(null)

	

	useEffect(() => {
		const {height , width} = getWindowDimensions();

		const sketch = (p) => {
			p.setup = () => {
				p.createCanvas(width*4,height*4)
			}
			p.draw = () => {
				p.background(30)
			}
		}

		const p5inst = new p5(sketch, p5node.current)
		console.log(p5inst);
	})

	// useEffect(() => {
	// 	const handleResize = e => {
	// 		p5inst.
	// })



  return (
	  <div className="container">
		  <div ref={p5node}></div>
	  </div>
  )
}

export default Canvas