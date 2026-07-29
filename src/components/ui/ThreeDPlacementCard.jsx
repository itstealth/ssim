/* eslint-disable react/prop-types */
"use client"

import React, { useState, useRef, useEffect, memo, useCallback } from "react"

import { Badge } from "@/components/ui/badge"
import { Building2, ExternalLink } from "lucide-react"

export default memo(function ThreeDPlacementCard({
  image = "https://v0.dev/placeholder.svg?height=400&width=300",
  name = "Alex Morgan",
  company = "Nexus Technologies",
  role = "Senior Developer",
  featured = false,
  logo = "https://v0.dev/placeholder.svg?height=400&width=300",
}) {
  const cardRef = useRef(null)
  const [transform, setTransform] = useState('')
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current || !isHovered) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    requestAnimationFrame(() => {
      setTransform(
        `perspective(1000px) rotateX(${y * -20}deg) rotateY(${x * 20}deg) scale3d(1.05, 1.05, 1.05)`
      )
      setGlowPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    })
  }, [isHovered])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
  }, [])

  return (
    <div
      ref={cardRef}
      className="group relative h-[350px] w-[250px] cursor-pointer will-change-transform"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative h-full w-full rounded-none overflow-hidden bg-[#7a0d0d] transition-all duration-300 ease-out shadow-lg hover:shadow-2xl"
        style={{
          transform: transform,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Glowing highlight effect */}
        {isHovered && isMounted && (
          <div
            className="pointer-events-none absolute -inset-2 z-10 opacity-60 blur-xl"
            style={{
              background: `radial-gradient(circle at ${glowPosition.x}px ${glowPosition.y}px, rgba(255, 255, 255, 0.4), transparent 40%)`,
              transition: "opacity 0.3s ease",
            }}
          />
        )}

        {/* Optimized image container */}
        <div className="absolute inset-0 overflow-hidden rounded-none">
          <img
            src={image}
            alt={name}
            width={260}
            height={360}
            className="h-full w-full object-cover object-top transform-gpu transition-transform duration-500 ease-out group-hover:scale-105"
            style={{ willChange: "transform" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-20 flex h-full flex-col justify-end p-4 pb-5">
          <div className="mt-auto text-center">
            <h3 className="mb-2.5 text-base sm:text-lg font-bold tracking-tight text-white drop-shadow-md">
              {name}
            </h3>
            <div className="bg-white rounded-none py-1.5 px-3 mx-auto flex items-center justify-center shadow-sm w-[88%] h-10">
              {logo ? (
                <img src={logo} alt={company || "company logo"} className="max-h-6 max-w-full object-contain" />
              ) : (
                <span className="text-[11px] sm:text-xs font-extrabold text-navy text-center truncate uppercase leading-tight">{company}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
