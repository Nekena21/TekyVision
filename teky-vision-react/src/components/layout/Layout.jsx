import { useEffect, useRef } from 'react'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

function TechBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let nodes = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const init = () => {
      nodes = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255,212,0,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.8
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      nodes.forEach(n => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,212,0,0.35)'
        ctx.fill()

        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    init()
    draw()

    window.addEventListener('resize', () => { resize(); init() })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // Respect prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return null

  return <canvas ref={canvasRef} id="tech-bg-canvas" aria-hidden="true" />
}

export default function Layout({ children }) {
  return (
    <>
      <TechBackground />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
