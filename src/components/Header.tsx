"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { WHATSAPP_URL, navLinksHome, navLinksInner } from "@/data/site";

type HeaderProps = {
  variant?: "home" | "inner";
  active?: "blog" | null;
};

export function Header({ variant = "home", active = null }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = variant === "home" ? navLinksHome : navLinksInner;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Link href="/" className="logo-link" aria-label="Betpro home">
          <Image
            src="/logo-betpro.png"
            alt="Betpro — Powered by Rollwin"
            width={360}
            height={96}
            priority
          />
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {links.map((link) => {
            const isBlog = link.href.includes("blog");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isBlog && active === "blog" ? "is-active" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <a href={WHATSAPP_URL} className="btn btn-ghost">
            Login
          </a>
          <a href={WHATSAPP_URL} className="btn btn-mint">
            Register
          </a>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <div className={`container nav-mobile${open ? " open" : ""}`}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <div className="header-actions">
          <a href={WHATSAPP_URL} className="btn btn-ghost" onClick={() => setOpen(false)}>
            Login
          </a>
          <a href={WHATSAPP_URL} className="btn btn-mint" onClick={() => setOpen(false)}>
            Register
          </a>
        </div>
      </div>
    </header>
  );
}
