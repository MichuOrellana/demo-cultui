"use client"

import { useState, useEffect } from "react"
import {
  HeroLiquidMetalRoot,
  HeroLiquidMetalContainer,
  HeroLiquidMetalContent,
  HeroLiquidMetalHeading,
  HeroLiquidMetalVisual,
  HeroLiquidMetalMobileVisual,
} from "@/components/ui/hero-liquid-metal"
import { motion } from "motion/react"
import { CosmicButton } from "@/components/ui/cosmic-button"

export function HeroSection() {
  const [shaderReady, setShaderReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShaderReady(true), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <HeroLiquidMetalRoot
      className="min-h-screen flex items-center py-20 lg:py-0"
      style={{ background: "#0A0A0A" }}
      colorTint="#22c55e"
      colorBack="#0A0A0A00"
      image="/luminao-logo.svg"
      srTitle="Luminao — Gaming aesthetics. High contrast branding."
      showBadges={false}
      showCta={false}
    >
      <HeroLiquidMetalContainer className="pt-0">
        <HeroLiquidMetalContent>
          <HeroLiquidMetalHeading>
            <div className="text-center lg:text-left">
              <span className="block font-black tracking-tighter text-white leading-none text-7xl sm:text-8xl xl:text-[9rem]">
                Luminao
              </span>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="mt-3 text-lg sm:text-xl text-white/50 font-light tracking-wide"
              >
                Gaming aesthetics. High contrast branding.
              </motion.p>
            </div>
          </HeroLiquidMetalHeading>

          <div className="flex justify-center lg:justify-start mt-4">
            <CosmicButton as="button">Ver proyectos</CosmicButton>
          </div>
        </HeroLiquidMetalContent>

        {/* Desktop visual — placeholder + shader apilados para crossfade */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none"
            style={{ opacity: shaderReady ? 0 : 1, transition: "opacity 0.4s ease-out" }}
          >
            <div
              className="w-[300px] h-[300px] xl:w-[430px] xl:h-[430px] rounded-full animate-pulse"
              style={{
                background:
                  "radial-gradient(circle, rgba(34,197,94,0.13) 0%, rgba(34,197,94,0.04) 60%, transparent 80%)",
              }}
            />
          </div>
          <div style={{ opacity: shaderReady ? 1 : 0, transition: "opacity 0.4s ease-out" }}>
            <HeroLiquidMetalVisual />
          </div>
        </div>
      </HeroLiquidMetalContainer>

      {/* Mobile placeholder — misma posición que MobileVisual (absolute en la section) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-24 -z-10 h-[360px] lg:hidden flex items-center justify-center"
        style={{ opacity: shaderReady ? 0 : 1, transition: "opacity 0.4s ease-out" }}
      >
        <div
          className="w-[260px] h-[260px] rounded-full animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.13) 0%, rgba(34,197,94,0.04) 60%, transparent 80%)",
          }}
        />
      </div>

      <div style={{ opacity: shaderReady ? 1 : 0, transition: "opacity 0.4s ease-out" }}>
        <HeroLiquidMetalMobileVisual />
      </div>
    </HeroLiquidMetalRoot>
  )
}
