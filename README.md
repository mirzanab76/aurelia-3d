# AURÉLIA — 3D Maison de Parfum

Website company profile mewah untuk rumah parfum, dengan animasi 3D botol parfum kristal yang halus.
Dibangun dengan **React + TypeScript + Tailwind CSS + Three.js** (`@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`).

## ✨ Fitur
- 11 section: Navbar, Hero, Maison/Story, Stats, Fragrance Notes, Collection, 3D Showcase, Craftsmanship, Ingredients, Press, Newsletter, Footer.
- **Botol parfum 3D** dengan **MeshTransmissionMaterial** (kaca refraktif), cairan amber bercahaya, tutup emas metalik, dan debu emas `Sparkles`.
- **Environment kustom** (Lightformer) untuk refleksi mewah tanpa file HDR eksternal.
- **Bloom** lembut agar emas & cairan tampak bercahaya.
- Animasi **lambat & halus** (slow auto-rotate, parallax kursor lembut, `damp`) — tanpa gerakan cepat.
- Reveal antar-section dengan **framer-motion** (easing cubic-bezier yang halus).
- Estetika: deep warm-black + emas, serif Playfair Display, glassmorphism.

## 🚀 Menjalankan

```bash
npm install
npm run dev
```

Buka URL yang muncul (biasanya http://localhost:5173).

## 🏗️ Build Produksi

```bash
npm run build
npm run preview
```

## 📁 Struktur

```
src/
├── components/
│   ├── Navbar  Hero  Story  Stats  Notes  Collection
│   ├── Showcase  Craftsmanship  Ingredients  Press  Newsletter  Footer
│   └── three/
│       ├── Scene.tsx    # Canvas, Environment, Bloom
│       └── Bottle.tsx   # botol parfum 3D + logika interaksi halus
├── hooks/   useMouse.ts, useScrollProgress.ts
├── lib/     motion.ts (preset framer-motion halus)
├── data/    content.ts (konten section)
└── App.tsx  main.tsx  index.css
```

## 🧠 Logika Interaksi 3D (semua halus)
- **Kursor**: `useMouse` menyimpan posisi ter-normalisasi ([-1,1]); dipakai sebagai parallax rotasi lembut yang memudar saat scroll.
- **Scroll**: `useScrollProgress` (0→1) membesarkan botol perlahan saat menuju Showcase, dihaluskan dengan `THREE.MathUtils.damp` (independen frame rate, tanpa hentakan).
