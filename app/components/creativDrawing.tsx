"use client"

import React from "react";
import { motion } from "framer-motion";

// A single-file React component that renders a vibrant, busy, creative "drawing" built with SVG + CSS + framer-motion.
// Drop this file into a Next.js project (e.g. /components/CreativeDrawing.jsx) and import it in a page.

export default function CreativeDrawing() {
  return (
    <div className=" flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#081127] to-[#071429] p-6">
      <div className="relative w-full max-w-5xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5">
        {/* background decorative gradient layers */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.12" />
              <stop offset="50%" stopColor="#ffde7d" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#7ae7c7" stopOpacity="0.06" />
            </linearGradient>
            <radialGradient id="g2" cx="30%" cy="20%">
              <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#2b6cff" stopOpacity="0" />
            </radialGradient>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="10" stdDeviation="30" floodColor="#000" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* soft wash */}
          <rect width="100%" height="100%" fill="url(#g1)" />
          <rect width="100%" height="100%" fill="url(#g2)" opacity="0.6" />

          {/* abstract constellation lines */}
          <g strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8">
            <line x1="120" y1="760" x2="520" y2="380" stroke="#7ae7c7" strokeOpacity="0.18" />
            <line x1="300" y1="120" x2="1100" y2="220" stroke="#ffde7d" strokeOpacity="0.12" />
            <line x1="900" y1="680" x2="1450" y2="420" stroke="#ff6b6b" strokeOpacity="0.1" />
          </g>

          {/* faint dots */}
          <g fill="#fff" opacity="0.08">
            {Array.from({ length: 40 }).map((_, i) => {
              const x = 50 + (i * 37) % 1500;
              const y = (i * 97) % 800;
              return <circle key={i} cx={x} cy={y} r={2 + (i % 3)} />;
            })}
          </g>

          {/* giant layered blob */}
          <g filter="url(#shadow)">
            <motion.g
              initial={{ scale: 0.98, rotate: -6, x: -20 }}
              animate={{ rotate: 6, scale: 1.02, x: 20 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
              <path d="M120 700 C180 460, 420 420, 640 520 C880 630, 1100 420, 1320 500 C1450 560, 1500 760, 1200 800 C950 820, 520 840, 120 700 Z" fill="#2b6cff" opacity="0.12" />
              <path d="M140 660 C200 460, 420 400, 640 500 C880 600, 1060 380, 1280 460 C1390 510, 1470 700, 1180 760 C930 790, 520 800, 140 660 Z" fill="#7c5cff" opacity="0.14" style={{ mixBlendMode: 'screen' }} />
            </motion.g>
          </g>

          {/* scribbles */}
          <g stroke="#fff" strokeWidth="1.6" strokeOpacity="0.22" fill="none">
            <path d="M320 140 C420 160, 520 80, 680 140 C780 180, 820 110, 980 150" strokeDasharray="8 6" />
            <path d="M100 300 C260 360, 300 440, 420 480 C560 520, 740 460, 900 520" strokeDasharray="2 6" />
          </g>

          {/* neon grid */}
          <g transform="translate(50,50)" strokeOpacity="0.06">
            {Array.from({ length: 14 }).map((_, i) => (
              <line key={i} x1={i * 110} y1={0} x2={i * 110} y2={800} stroke="#fff" />
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <line key={`h-${i}`} x1={0} y1={i * 110} x2={1500} y2={i * 110} stroke="#fff" />
            ))}
          </g>
        </svg>

        {/* Foreground — interactive and animated shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute left-8 top-12 w-40 h-40 rounded-full blur-[40px] opacity-80"
            style={{ background: 'linear-gradient(135deg,#ff9a9e 0%,#fecfef 100%)', mixBlendMode: 'screen' }}
            initial={{ scale: 0.9, y: 0 }}
            animate={{ scale: 1.12, y: 18 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />

          <motion.div
            className="absolute right-12 bottom-10 w-72 h-72 rounded-3xl"
            style={{ background: 'conic-gradient(from 180deg at 50% 50%, #7ae7c7, #2b6cff, #7c5cff, #ff6b6b)', filter: 'blur(26px)', opacity: 0.82 }}
            initial={{ rotate: -10, scale: 0.95 }}
            animate={{ rotate: 10, scale: 1.04 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />

          {/* animated cluster: nodes + connecting lines */}
          <motion.svg
            className="absolute left-40 top-28"
            width="520"
            height="320"
            viewBox="0 0 520 320"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <defs>
              <radialGradient id="nodeGrad" cx="50%" cy="30%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#7ae7c7" stopOpacity="0.9" />
              </radialGradient>
            </defs>

            {/* lines */}
            <motion.g animate={{ rotate: [0, 2, -1, 0] }} transition={{ duration: 9, repeat: Infinity }}>
              <line x1="40" y1="280" x2="220" y2="40" stroke="#fff" strokeOpacity="0.08" strokeWidth="2" />
              <line x1="120" y1="240" x2="420" y2="80" stroke="#fff" strokeOpacity="0.06" strokeWidth="1.6" />
            </motion.g>

            {/* nodes */}
            {[
              { x: 40, y: 280, r: 18, c: '#ffde7d' },
              { x: 220, y: 40, r: 28, c: '#7ae7c7' },
              { x: 420, y: 80, r: 14, c: '#ff6b6b' },
              { x: 120, y: 240, r: 10, c: '#7c5cff' },
            ].map((n, i) => (
              <motion.g key={i} initial={{ y: 0 }} animate={{ y: [0, -6, 0] }} transition={{ duration: 3 + i, repeat: Infinity, repeatType: "reverse" }}>
                <circle cx={n.x} cy={n.y} r={n.r} fill={n.c} opacity={0.98} />
                <circle cx={n.x} cy={n.y} r={n.r + 8} fill="url(#nodeGrad)" opacity={0.28} />
                <circle cx={n.x} cy={n.y} r={2} fill="#fff" />
              </motion.g>
            ))}
          </motion.svg>

          {/* playful sticky notes / cards */}
          <motion.div
            className="absolute top-20 right-28 w-56 p-3 rounded-xl shadow-2xl pointer-events-auto"
            style={{ background: 'linear-gradient(180deg,#ffffff10,#ffffff06)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.04)' }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <div className="text-sm font-semibold text-white/90">Ideas</div>
            <div className="mt-2 text-xs text-white/70">• decouple components</div>
            <div className="text-xs text-white/70">• async visuals</div>
            <div className="mt-3 text-[11px] text-white/60">drag, hover, explore</div>
          </motion.div>

          {/* hand-drawn squiggle (SVG path) with animated dashoffset */}
          <svg className="absolute left-8 bottom-36 w-72 h-44" viewBox="0 0 300 160">
            <path d="M10 140 C60 20, 120 60, 180 30 C220 10, 260 70, 290 20" stroke="#fff" strokeWidth="2" fill="none" strokeOpacity="0.14" strokeDasharray="6 8">
              <animate attributeName="stroke-dashoffset" from="0" to="-72" dur="6s" repeatCount="indefinite" />
            </path>
          </svg>

          {/* central badge with micro-interaction */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full flex items-center justify-center"
            style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06), rgba(255,255,255,0))', border: '1px solid rgba(255,255,255,0.06)' }}
            whileHover={{ scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <motion.div initial={{ rotate: 0 }} animate={{ rotate: [0, 6, -6, 0] }} transition={{ duration: 10, repeat: Infinity }} className="w-40 h-40 rounded-full flex items-center justify-center">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <defs>
                  <linearGradient id="logoG" x1="0" x2="1">
                    <stop offset="0%" stopColor="#7ae7c7" />
                    <stop offset="100%" stopColor="#7c5cff" />
                  </linearGradient>
                </defs>
                <circle cx="60" cy="60" r="36" fill="url(#logoG)" opacity="0.98" />
                <g transform="translate(26,26)">
                  <rect x="0" y="0" width="22" height="22" rx="6" fill="#fff" opacity="0.06" />
                  <rect x="28" y="0" width="22" height="22" rx="6" fill="#fff" opacity="0.06" />
                  <rect x="0" y="28" width="22" height="22" rx="6" fill="#fff" opacity="0.06" />
                </g>
              </svg>
            </motion.div>
          </motion.div>

          {/* tiny caption / signature */}
          <div className="absolute left-6 bottom-6 text-xs text-white/50 font-mono pointer-events-none">creative-doodle · generated</div>
        </div>

      </div>
    </div>
  );
}
