const links: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Maison", href: "#story" },
  { label: "Fragrance", href: "#notes" },
  { label: "Collection", href: "#collection" },
  { label: "Craft", href: "#craft" },
];

const Navbar = (): JSX.Element => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-amber-100/10 bg-[#0e0b08]/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-display text-2xl tracking-[0.25em]">
          AURÉLIA
        </a>
        <ul className="hidden gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-wide text-amber-50/70 transition hover:text-amber-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#collection"
          className="rounded-full border border-amber-200/40 px-5 py-2 text-sm tracking-wide text-amber-100 transition hover:bg-amber-200/10"
        >
          Boutique
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
