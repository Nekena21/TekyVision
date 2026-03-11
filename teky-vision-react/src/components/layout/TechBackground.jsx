import { useEffect, useRef } from 'react'

export default function TechBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animId
    let width, height, nodes

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      initNodes()
    }

    const initNodes = () => {
      const count = Math.floor((width * height) / 18000)
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2.5 + 1
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,212,0,0.25)'
        ctx.fill()
      })
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(255,212,0,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.5
      }}
      aria-hidden="true"
    />
  )
}
