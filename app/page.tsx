import { HeroSection } from "@/components/landing/hero"
import { FeaturesSection } from "@/components/landing/features"
import { CTASection } from "@/components/landing/cta"

export default function Page() {
  return (
    <div
      className="dark"
      style={{ fontFamily: "var(--font-montserrat, system-ui, sans-serif)" }}
    >
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  )
}
