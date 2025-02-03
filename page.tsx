"use client"

import { useEffect } from "react"
import Dollar3D from "./components/dollar-3d"

export default function Home() {
  useEffect(() => {
    // Custom cursor
    const cursor = document.createElement("div")
    cursor.id = "cursor"
    document.body.appendChild(cursor)

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    document.addEventListener("mousemove", moveCursor)

    // Click effect
    const createClickEffect = (e: MouseEvent) => {
      const clickEffect = document.createElement("div")
      clickEffect.classList.add("click-effect")
      clickEffect.style.left = `${e.clientX}px`
      clickEffect.style.top = `${e.clientY}px`
      document.body.appendChild(clickEffect)
      setTimeout(() => clickEffect.remove(), 500)
    }

    document.addEventListener("click", createClickEffect)

    // Bubble animation
    const createBubble = () => {
      const bubble = document.createElement("div")
      bubble.classList.add("bubble")
      const size = Math.random() * 100 + 50
      bubble.style.width = `${size}px`
      bubble.style.height = `${size}px`
      bubble.style.left = `${Math.random() * 100}vw`
      bubble.style.top = `${Math.random() * 100}vh`
      document.body.appendChild(bubble)
      setTimeout(() => bubble.remove(), 15000)
    }

    const animateBubbles = () => {
      createBubble()
      setTimeout(animateBubbles, Math.random() * 3000 + 2000)
    }

    animateBubbles()

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("click", createClickEffect)
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(98,47,200,0.15),transparent_50%)] z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,90,200,0.15),transparent_50%)] z-0" />

      <nav className="flex justify-between items-center p-6 relative z-20">
        <a href="#" className="text-2xl font-extrabold tracking-tighter">
          blk.
        </a>
        <button
          onClick={() => (window.location.href = "https://blkscripts.github.io/BLK-Scripts/")}
          className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all"
        >
          Main
        </button>
      </nav>

      <main className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto mt-20 mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          The Best Scripts Platform For Your Needs
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          BLK is your trusted platform for high-quality scripts tailored for your needs. Our experienced team ensures
          top-tier performance and security.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <button
            onClick={() => (window.location.href = "https://discord.gg/gXG2pjtpft")}
            className="px-8 py-4 rounded-lg bg-[#6c2fff] hover:bg-[#7d47ff] transition-colors font-semibold"
          >
            Join Discord
          </button>
          <button
            onClick={() => (window.location.href = "https://blkscripts.github.io/BLK-Scripts/")}
            className="px-8 py-4 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all font-semibold"
          >
            Learn More
          </button>
        </div>

        <Dollar3D/>
      </main>

      <style jsx global>{`
        * {
          cursor: none;
        }

        #cursor {
          width: 8px;
          height: 8px;
          background-color: white;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
        }

        .click-effect {
          position: fixed;
          border: 2px solid white;
          border-radius: 50%;
          animation: clickEffect 0.5s ease-out;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9998;
        }

        @keyframes clickEffect {
          0% {
            width: 0px;
            height: 0px;
            opacity: 0.5;
          }
          100% {
            width: 50px;
            height: 50px;
            opacity: 0;
          }
        }

        .bubble {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
          background: radial-gradient(circle at 30% 30%, #ffffff, #333333);
          animation: float 15s ease-in-out infinite, fadeInOut 15s ease-in-out;
          z-index: 1;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  )
}

