"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import headerImg from "../public/images/header.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#home");
  const pathname = usePathname();

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Networks", href: "#networks" },
    { name: "Features", href: "#features" },
  ];

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sectionIds = ["home", "about", "networks", "features"];
    const observers: IntersectionObserver[] = [];

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveHash(`#${id}`);
              }
            });
          },
          { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
        );

        observer.observe(el);
        observers.push(observer);
      });
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMobileNavClick = (href: string) => {
    scrollToSection(href.substring(1));
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          isScrolled
            ? "backdrop-blur-xl bg-black/65 border-b border-white/10 shadow-[0_4px_30px_-10px_rgba(0,180,255,0.25)]"
            : "backdrop-blur-sm bg-black/20 border-b border-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <Image
              src={headerImg}
              alt="Warp DeFi"
              priority
              className="h-7 w-auto select-none"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigationItems.map((item) => {
              const isActive =
                activeHash === item.href ||
                (item.href === "#home" && pathname === "/");
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className={cn(
                    "relative px-3 py-2 text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-300 text-slate-400 hover:text-[#0554F2]",
                    isActive && "text-[#0554F2]"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute left-1/2 -bottom-0.5 h-px w-6 -translate-x-1/2 bg-gradient-to-r from-[#0554F2] to-[#4d8dff]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Social + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-3">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-slate-400 hover:text-[#0554F2] transition-colors"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="text-slate-400 hover:text-[#0554F2] transition-colors"
              >
                <FaTelegram className="w-4 h-4" />
              </a>
            </div>
            <Link
              href="/"
              className="group relative inline-flex items-center gap-1.5 rounded-full border border-[#0554F2]/40 bg-gradient-to-r from-[#0554F2]/25 to-[#023cba]/25 px-5 py-2 text-xs font-medium tracking-wider text-[#0554F2] hover:text-white hover:border-[#0554F2] transition-all overflow-hidden"
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              Launch App
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/10 bg-white/5 text-slate-300 hover:text-[#0554F2] hover:border-[#0554F2]/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-16 inset-x-0 bg-black/95 backdrop-blur-xl border-t border-white/10 shadow-xl">
            <div className="px-4 py-6 space-y-1">
              {navigationItems.map((item) => {
                const isActive = activeHash === item.href;
                return (
                  <button
                    key={item.href}
                    onClick={() => handleMobileNavClick(item.href)}
                    className={cn(
                      "block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors",
                      isActive
                        ? "text-[#0554F2] bg-white/5"
                        : "text-slate-300 hover:text-[#0554F2] hover:bg-white/5"
                    )}
                  >
                    {item.name}
                  </button>
                );
              })}

              <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-[#0554F2] transition-colors"
                    aria-label="Twitter"
                  >
                    <FaXTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-[#0554F2] transition-colors"
                    aria-label="Telegram"
                  >
                    <FaTelegram className="w-5 h-5" />
                  </a>
                </div>

                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1 rounded-full border border-[#0554F2]/40 bg-[#0554F2]/10 px-4 py-2 text-sm font-medium text-[#0554F2] hover:border-[#0554F2] hover:text-white transition-colors"
                >
                  Launch
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
