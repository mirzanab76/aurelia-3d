const columns: ReadonlyArray<{ title: string; links: ReadonlyArray<string> }> = [
  { title: "Maison", links: ["Kisah kami", "Savoir-faire", "Keberlanjutan", "Karier"] },
  { title: "Boutique", links: ["Koleksi", "Edisi terbatas", "Set hadiah", "Kartu hadiah"] },
  { title: "Layanan", links: ["Lacak pesanan", "Pengembalian", "Ukiran", "Kontak"] },
];

const socials: ReadonlyArray<string> = ["Instagram", "Pinterest", "YouTube", "TikTok"];

const Footer = (): JSX.Element => {
  return (
    <footer className="relative border-t border-amber-100/10 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="font-display text-2xl tracking-[0.25em]">AURÉLIA</div>
            <p className="mt-3 max-w-xs text-sm text-amber-50/55">
              Maison de parfum · Diciptakan di Paris sejak 1924.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <div className="text-sm font-medium text-amber-100">{column.title}</div>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-amber-50/55 transition hover:text-amber-100">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-amber-100/10 pt-8 md:flex-row">
          <p className="text-sm text-amber-50/45">
            © {new Date().getFullYear()} AURÉLIA Paris. Tous droits réservés.
          </p>
          <ul className="flex gap-5">
            {socials.map((social) => (
              <li key={social}>
                <a href="#" className="text-sm text-amber-50/60 transition hover:text-amber-100">
                  {social}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
