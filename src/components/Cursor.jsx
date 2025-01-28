import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import PropTypes from 'prop-types'

function Cursor({ isHovered }) {
	const size = isHovered ? 128 : 24
	const circle = useRef(null)
	const mouse = useRef({ x: 0, y: 0 })
	const delayedMouse = useRef({ x: 0, y: 0 })
	const rafId = useRef(null)

	const onMouseMove = (e) => {
		mouse.current = { x: e.clientX, y: e.clientY }
	}

	const lerp = (x, y, a) => x * (1 - a) + y * a

	const moveCircle = (x, y) => {
		gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 })
	}

	const animate = () => {
		const { x, y } = delayedMouse.current
		delayedMouse.current = {
			x: lerp(x, mouse.current.x, 0.075),
			y: lerp(y, mouse.current.y, 0.075),
		}
		moveCircle(delayedMouse.current.x, delayedMouse.current.y)
		rafId.current = window.requestAnimationFrame(animate)
	}

	useEffect(() => {
		animate()
		window.addEventListener('mousemove', onMouseMove)

		return () => {
			window.cancelAnimationFrame(rafId.current)
			window.removeEventListener('mousemove', onMouseMove)
		}
	}, [])

	useEffect(() => {
		gsap.to(circle.current, {
			width: size,
			height: size,
			duration: 0.2,
			ease: 'power2.out',
		})
	}, [size])

	return (
		<div
			ref={circle}
			className='fixed top-0 left-0 bg-amber-400 rounded-full z-50 mix-blend-difference'
			style={{
				pointerEvents: 'none',
			}}></div>
	)
}

Cursor.propTypes = {
	isHovered: PropTypes.bool,
}

export default Cursor
