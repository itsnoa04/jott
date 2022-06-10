import p5 from 'p5'
import React, { useEffect } from 'react'
import useWindowDimensions from '../../lib/useWindowDimensions'
import './Canvas.css'

const Canvas = () => {
	const p5node = React.useRef(null)

	const {height , width} = useWindowDimensions();

	const sketch = (p) => {
		p.setup = () => {
			p.createCanvas(width,height)
		}
		p.draw = () => {
			p.background(30)
		}
	}

	useEffect(() => {
		const P5Instance = new p5(sketch, p5node.current)
	},[])


  return (
	  <div className="container">
		  <div ref={p5node}></div>
	  </div>
  )
}

export default Canvas