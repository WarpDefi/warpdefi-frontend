import React from "react";
import {
  FaXTwitter,
  FaTelegram,
  FaDiscord,
  FaMedium,
  FaGithub,
  FaRedditAlien,
} from "react-icons/fa6";

// Central definition so it's easy to update real links later
const socials: {
  name: string;
  href: string;
  icon: React.ReactNode;
  gradient: string;
  ring: string;
  delay: number;
}[] = [
  {
    name: "Telegram",
    href: "https://t.me",
    icon: <FaTelegram className="w-6 h-6" />,
    gradient: "from-cyan-500/25 via-cyan-400/10 to-transparent",
    ring: "ring-cyan-400/30",
    delay: 0,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/Warp_Defi",
    icon: <FaXTwitter className="w-6 h-6" />,
    gradient: "from-blue-500/25 via-blue-400/10 to-transparent",
    ring: "ring-blue-400/30",
    delay: 100,
  },
  {
    name: "Discord",
    href: "https://discord.gg",
    icon: <FaDiscord className="w-6 h-6" />,
    gradient: "from-indigo-500/25 via-indigo-400/10 to-transparent",
    ring: "ring-indigo-400/30",
    delay: 200,
  },
  {
    name: "Medium",
    href: "https://medium.com/@warpdefi",
    icon: <FaMedium className="w-6 h-6" />,
    gradient: "from-emerald-500/25 via-emerald-400/10 to-transparent",
    ring: "ring-emerald-400/30",
    delay: 300,
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: <FaGithub className="w-6 h-6" />,
    gradient: "from-slate-500/25 via-slate-400/10 to-transparent",
    ring: "ring-slate-400/30",
    delay: 400,
  },
  {
    name: "Reddit",
    href: "https://reddit.com/r",
    icon: <FaRedditAlien className="w-6 h-6" />,
    gradient: "from-orange-500/25 via-amber-400/10 to-transparent",
    ring: "ring-orange-400/30",
    delay: 500,
  },
];

export function JoinCommunity() {
  return (
    <section
      id="community"
      className="relative py-32 overflow-hidden"
      aria-labelledby="join-community-heading"
    >
      {/* Background aesthetic */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(0,160,255,0.15),transparent_60%),radial-gradient(circle_at_82%_65%,rgba(0,180,255,0.12),transparent_55%)] opacity-70" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_70px)] opacity-[0.12]" />
        <div className="absolute -inset-x-40 -bottom-56 h-[480px] bg-gradient-to-t from-[#0554F2]/25 via-[#0554F2]/0 to-transparent blur-[120px]" />
      </div>
      <div className="container mx-auto px-4">
        <div
          className="max-w-3xl mx-auto text-center mb-20 fade-in-up"
          data-delay={0}
        >
          <h2
            id="join-community-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight heading-split bg-clip-text text-transparent bg-[linear-gradient(90deg,#ffffff,#0554F2_55%,#2f8fff)]"
          >
            Join The Warp Community
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-300/85 leading-relaxed font-medium">
            Be early. Shape governance, unlock cross‑chain incentives & build
            the future execution layer with us.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/15 via-transparent to-blue-500/15 px-7 py-3 text-sm md:text-base font-semibold tracking-wide text-cyan-300 hover:text-white shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_4px_40px_-10px_rgba(0,170,255,0.4)] transition-all hover:border-cyan-400/50 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_6px_50px_-8px_rgba(0,180,255,0.55)] cursor-pointer">
            Enter The Portal
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300" />
            </span>
          </div>
          <div className="mt-8 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-7">
          {socials.map((s) => (
            <li key={s.name} className="fade-in-up" data-delay={s.delay}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="group relative block rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 via-white/0 to-transparent px-4 py-6 text-center shadow-[0_4px_40px_-10px_rgba(0,180,255,0.35)] hover:shadow-[0_6px_60px_-8px_rgba(0,180,255,0.55)] transition-all duration-400 hover:-translate-y-1"
              >
                {/* subtle inner gradient */}
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${s.gradient}`}
                />
                <div className="relative flex flex-col items-center gap-4">
                  <div
                    className={`flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border border-white/10 ring-1 ${s.ring} group-hover:bg-white/10 group-hover:ring-white/40 transition-colors`}
                  >
                    <span className="text-slate-200 group-hover:text-white">
                      {s.icon}
                    </span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 group-hover:text-cyan-300 transition-colors">
                    {s.name}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default JoinCommunity;
