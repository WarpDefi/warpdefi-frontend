"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Features } from "@/components/features";
import { SupportedNetworks } from "@/components/supported-networks";
import { JoinCommunity } from "@/components/join-community";
import { Footer } from "@/components/footer";
export default function Home() {
  return (
    <div
      className="min-h-screen relative overflow-hidden text-white selection:bg-cyan-500/30"
      style={{ backgroundColor: "#08070C" }}
    >
      {/* Unified dark layered background */}

      <main className="relative z-30">
        <Navigation />
        <Hero />
        <About />
        <SupportedNetworks />
        <Features />
        <JoinCommunity />
        <Footer />
      </main>
    </div>
  );
}
