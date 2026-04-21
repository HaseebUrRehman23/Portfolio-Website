import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const AnimatedBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let animationFrameId
    let isDocumentVisible = !document.hidden
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resizeCanvas()

    const particles = []
    const particleCount = Math.min(70, Math.floor(window.innerWidth / 18))
    const spacing = 20
    const dotSize = 1
    const gridCanvas = document.createElement("canvas")
    const gridCtx = gridCanvas.getContext("2d")

    class Particle {
      constructor() {
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.2
        this.size = Math.random() * 2 + 1
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0) this.x = window.innerWidth
        if (this.x > window.innerWidth) this.x = 0
        if (this.y < 0) this.y = window.innerHeight
        if (this.y > window.innerHeight) this.y = 0

        this.opacity += (Math.random() - 0.5) * 0.01
        this.opacity = Math.max(0.1, Math.min(0.6, this.opacity))
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(140, 136, 142, 0.57)`
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const drawGrid = () => {
      if (!gridCtx) return
      gridCanvas.width = window.innerWidth
      gridCanvas.height = window.innerHeight
      gridCtx.clearRect(0, 0, gridCanvas.width, gridCanvas.height)
      for (let x = 0; x < gridCanvas.width; x += spacing) {
        for (let y = 0; y < gridCanvas.height; y += spacing) {
          gridCtx.beginPath()
          gridCtx.arc(x, y, dotSize, 0, Math.PI * 2)
          gridCtx.fillStyle = "rgba(245, 239, 246, 0.27)"
          gridCtx.fill()
        }
      }
    }

    drawGrid()
    const handleResize = () => {
      resizeCanvas()
      drawGrid()
    }
    const handleVisibilityChange = () => {
      isDocumentVisible = !document.hidden
    }

    window.addEventListener("resize", handleResize)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    const animate = () => {
      if (!isDocumentVisible) {
        animationFrameId = requestAnimationFrame(animate)
        return
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.drawImage(gridCanvas, 0, 0)

      if (!prefersReducedMotion) {
        particles.forEach((particle) => {
          particle.update()
          particle.draw()
        })
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ background: "#000000" }} />
}

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      
      <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
        <AnimatedBackground/>
        <Navbar/>
        <Hero/>
        <About/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
