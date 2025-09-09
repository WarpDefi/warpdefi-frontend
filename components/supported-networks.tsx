"use client";

import React from "react";
import Image from "next/image";

const networks = [
  {
    name: "X Layer",
    logo: "/images/xlayer.jpg",
    description: "Scalable layer empowering cross-ecosystem liquidity.",
    url: "https://x.com/xlayerofficial?s=21",
  },
  {
    name: "Ink",
    logo: "/images/ink.jpg",
    description: "Modular chain focused on performance & interoperability.",
    url: "https://x.com/inkonchain?s=21",
  },
  {
    name: "Warp",
    logo: "/images/warp.png",
    description: "Unified automation & execution infrastructure.",
    url: "https://x.com/warponchain?s=21",
  },
  {
    name: "Base",
    logo: "/images/base.jpg",
    description: "Ethereum L2 fostering onchain adoption at scale.",
    url: "https://x.com/base",
  },
];

export function SupportedNetworks() {
  return (
    <section id="networks" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_35%,rgba(0,170,255,0.12),transparent_60%),radial-gradient(circle_at_75%_70%,rgba(0,180,255,0.10),transparent_55%)] opacity-60" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_70px)] opacity-[0.18]" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-2 mb-6 shadow-inner shadow-white/5">
            <span className="text-[11px] tracking-[0.25em] font-medium brand-blue-text">
              MULTICHAIN ECOSYSTEM
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight heading-split">
            Supported Networks
          </h2>
          <p className="text-lg md:text-xl text-slate-300/85 max-w-3xl mx-auto leading-relaxed">
            Unified access layer to performant execution environments. Route,
            settle & earn across chains with a consistent control surface.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {networks.map((network) => (
            <a
              key={network.name}
              href={network.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${network.name} on X`}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-cyan-400/30 hover:via-white/10 hover:to-transparent transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            >
              <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-xl p-8 flex flex-col border border-white/10 shadow-[0_2px_40px_-10px_rgba(0,180,255,0.15)]">
                <div className="flex justify-center mb-6">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-600/15 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-cyan-300/30 transition-colors" />
                    <div className="relative flex items-center justify-center w-full h-full rounded-xl bg-white/5 backdrop-blur-sm">
                      <Image
                        src={network.logo}
                        alt={`${network.name} logo`}
                        width={36}
                        height={36}
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center tracking-wide group-hover:brand-blue-text transition-colors">
                  {network.name}
                </h3>
                <p className="text-slate-400 text-center text-sm leading-relaxed group-hover:text-slate-300 transition-colors flex-1">
                  {network.description}
                </p>
                <div className="absolute top-4 right-4 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_2px_rgba(34,197,94,0.6)]" />
                  <span className="text-[10px] tracking-wider text-slate-500">
                    SOON
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="brand-blue-text font-medium text-sm tracking-wide">
                All networks operational & optimized
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
