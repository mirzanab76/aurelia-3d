export interface Stat {
  value: string;
  label: string;
}

export const stats: ReadonlyArray<Stat> = [
  { value: "1924", label: "Didirikan di Paris" },
  { value: "32", label: "Esens langka" },
  { value: "6 bln", label: "Proses pematangan" },
  { value: "100%", label: "Bahan alami" },
];

export interface FragranceNote {
  tier: string;
  title: string;
  description: string;
  scents: ReadonlyArray<string>;
}

export const fragranceNotes: ReadonlyArray<FragranceNote> = [
  {
    tier: "01",
    title: "Top Notes",
    description: "Kesan pertama yang cerah dan menyegarkan.",
    scents: ["Bergamot", "Lemon Italia", "Pink Pepper"],
  },
  {
    tier: "02",
    title: "Heart Notes",
    description: "Jantung aroma yang berkembang perlahan.",
    scents: ["Mawar Damask", "Melati", "Iris"],
  },
  {
    tier: "03",
    title: "Base Notes",
    description: "Jejak hangat yang bertahan sepanjang hari.",
    scents: ["Amber", "Vanila Madagascar", "Cendana"],
  },
];

export interface Product {
  name: string;
  tagline: string;
  price: string;
  gradient: string;
}

export const collection: ReadonlyArray<Product> = [
  { name: "Lumière d'Or", tagline: "Amber & vanila hangat", price: "Rp 2.450.000", gradient: "from-amber-300/40 to-yellow-700/30" },
  { name: "Nuit Velours", tagline: "Oud & mawar mewah", price: "Rp 2.900.000", gradient: "from-rose-400/30 to-purple-900/30" },
  { name: "Jardin Secret", tagline: "Melati & bergamot segar", price: "Rp 2.250.000", gradient: "from-emerald-300/30 to-teal-800/30" },
  { name: "Brume Saline", tagline: "Aquatic & musk lembut", price: "Rp 2.100.000", gradient: "from-sky-300/30 to-blue-900/30" },
];

export interface Step {
  step: string;
  title: string;
  description: string;
}

export const craftsmanship: ReadonlyArray<Step> = [
  { step: "01", title: "Pemilihan Bahan", description: "Bahan langka dipanen tangan dari kebun terbaik dunia." },
  { step: "02", title: "Ekstraksi", description: "Enfleurage & distilasi untuk menjaga kemurnian aroma." },
  { step: "03", title: "Pematangan", description: "Esens diistirahatkan berbulan-bulan hingga sempurna." },
  { step: "04", title: "Pembotolan", description: "Dituang ke dalam kristal yang ditiup tangan oleh artisan." },
];

export interface Ingredient {
  name: string;
  origin: string;
  icon: string;
}

export const ingredients: ReadonlyArray<Ingredient> = [
  { name: "Mawar Damask", origin: "Grasse, Prancis", icon: "🌹" },
  { name: "Oud", origin: "Assam, India", icon: "🪵" },
  { name: "Vanila", origin: "Madagascar", icon: "🌼" },
  { name: "Bergamot", origin: "Calabria, Italia", icon: "🍋" },
  { name: "Melati", origin: "Mesir", icon: "🤍" },
  { name: "Amber", origin: "Baltik", icon: "✨" },
];

export interface Press {
  quote: string;
  source: string;
}

export const press: ReadonlyArray<Press> = [
  { quote: "Sebuah mahakarya penciuman yang elegan dan abadi.", source: "VOGUE" },
  { quote: "Aurélia mendefinisikan ulang kemewahan modern.", source: "Harper's BAZAAR" },
  { quote: "Setiap tetesnya terasa seperti sebait puisi.", source: "GQ" },
];
