import Image from "next/image";
import { HeroWelcomeModal } from "@/components/home/HeroWelcomeModal";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-media" aria-hidden="true">
        <Image
          src="/images/hero-desktop.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-photo hero-photo-desktop"
        />
        <Image
          src="/images/hero-mobile.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-photo hero-photo-mobile"
        />
      </div>
      <HeroWelcomeModal />
    </section>
  );
}
