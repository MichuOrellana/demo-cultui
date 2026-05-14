import { Gamepad2, Layers, Contrast } from "lucide-react"

const features = [
  {
    icon: Gamepad2,
    title: "Branding gaming",
    description:
      "Identidades visuales construidas para el ecosistema gaming. Agresivas, memorables y escalables.",
  },
  {
    icon: Layers,
    title: "Identidad visual",
    description:
      "Sistemas de diseño completos: logo, tipografía, paleta y guía de uso para cualquier medio.",
  },
  {
    icon: Contrast,
    title: "Diseño de alto contraste",
    description:
      "Composiciones que destacan en cualquier pantalla. Legibilidad y impacto visual maximizados.",
  },
]

export function FeaturesSection() {
  return (
    <section style={{ background: "#0A0A0A" }} className="py-24 px-4">
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-xl border border-white/8 hover:border-green-500/30 transition-colors duration-500 p-6 bg-white/[0.02]"
          >
            <div className="mb-4 inline-flex p-2.5 rounded-lg bg-green-500/10">
              <Icon className="h-5 w-5 text-green-400" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
