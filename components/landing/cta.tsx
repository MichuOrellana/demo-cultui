import { CosmicButton } from "@/components/ui/cosmic-button"

export function CTASection() {
  return (
    <section
      style={{ background: "#0A0A0A" }}
      className="py-24 px-4 border-t border-white/5"
    >
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          ¿Querés un diseño que se vea como Silicon Valley?
        </h2>
        <CosmicButton href="mailto:orellanamichel5@gmail.com">
          Hablemos
        </CosmicButton>
      </div>
    </section>
  )
}
