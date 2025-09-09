import { Rocket } from "lucide-react";
import Image from "next/image";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="relative ">
      <div className="border-t border-white/10 bg-gradient-to-b from-white/[0.03] via-white/[0.015] to-transparent backdrop-blur-xl">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-5">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/logo.png"
                  alt="Warp DeFi"
                  width={28}
                  height={28}
                  className="w-7 h-7 rounded-md ring-1 ring-white/10"
                />
                <span className="text-lg font-semibold tracking-tight heading-split">
                  Warp DeFi
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400/90">
                Multichain execution & governance layer— trade, pool & direct
                protocol evolution with full custody.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-5 text-white text-sm tracking-[0.2em] uppercase">
                Platform
              </h3>
              <ul className="space-y-2.5">
                {[
                  "about",
                  "networks",
                  "features",
                  "community",
                  "governance",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      className="text-sm text-slate-400 hover:brand-blue-text transition-colors tracking-wide"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-5 text-white text-sm tracking-[0.2em] uppercase">
                Resources
              </h3>
              <ul className="space-y-2.5">
                {["Docs", "Brand", "Whitepaper", "Security"].map((item) => (
                  <li key={item}>
                    <a
                      href="https://docs.warpdefi.com/"
                      className="text-sm text-slate-400 hover:brand-blue-text transition-colors tracking-wide"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-5 text-white text-sm tracking-[0.2em] uppercase">
                Community
              </h3>
              <div className="flex space-x-5">
                <a
                  href="https://x.com/Warp_Defi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:brand-blue-text transition-colors"
                >
                  <FaXTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:brand-blue-text transition-colors"
                >
                  <FaTelegram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-14 pt-8 border-t  border-white/10 text-center">
            <p className="text-xs tracking-wider text-slate-500">
              © {new Date().getFullYear()} Warp DeFi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}