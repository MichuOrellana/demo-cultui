"use client"

import { useState } from "react"
import { CosmicButton } from "@/components/ui/cosmic-button"

const inputBase =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-colors duration-200 focus:border-[#22c55e]/50 focus:bg-white/[0.05]"

export function CTASection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      style={{ background: "#0A0A0A" }}
      className="py-24 px-4 border-t border-white/5"
    >
      <div className="max-w-xl mx-auto flex flex-col items-center gap-10">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            ¿Querés un diseño que se vea como Silicon Valley?
          </h2>
          <p className="mt-3 text-white/40 text-sm tracking-wide">
            Contanos tu proyecto y te respondemos en menos de 24 h.
          </p>
        </div>

        {sent ? (
          <div className="w-full rounded-xl border border-[#22c55e]/30 bg-[#22c55e]/5 px-8 py-10 text-center">
            <span className="text-2xl font-bold text-white tracking-tight">
              Mensaje enviado ✓
            </span>
            <p className="mt-2 text-white/40 text-sm">Nos ponemos en contacto pronto.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <input
              required
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              className={inputBase}
            />
            <input
              required
              type="email"
              name="email"
              placeholder="tu@email.com"
              className={inputBase}
            />
            <textarea
              required
              name="mensaje"
              placeholder="Contanos tu proyecto..."
              rows={5}
              className={`${inputBase} resize-none`}
            />
            <div className="flex justify-center pt-2">
              <CosmicButton as="button" type="submit">
                Hablemos
              </CosmicButton>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
