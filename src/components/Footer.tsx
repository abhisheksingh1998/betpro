import Image from "next/image";
import Link from "next/link";
import { footer } from "@/data/content";
import { WHATSAPP_URL, navLinksHome } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Image
            src="/logo-betpro.png"
            alt="Betpro"
            width={155}
            height={42}
          />
          <p>{footer.description}</p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            {navLinksHome.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Get started</h4>
          <ul>
            <li>
              <a href={WHATSAPP_URL}>WhatsApp desk</a>
            </li>
            <li>
              <a href={WHATSAPP_URL}>Request Betpro ID</a>
            </li>
            <li>
              <Link href="/blog">Insights</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">{footer.copyright}</div>
    </footer>
  );
}
