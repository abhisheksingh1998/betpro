import Image from "next/image";
import { hero } from "@/data/content";
import { HeroWelcomeModal } from "@/components/home/HeroWelcomeModal";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-media" aria-hidden="true">
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-photo"
        />
      </div>
      <HeroWelcomeModal />
    </section>
  );
}
