import Link from "next/link";

const links = [
  { href: "/tsenta", label: "Tsenta" },
  { href: "/writing", label: "Blog" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link className="wordmark" href="/" aria-label="Agnay Srivastava, home">
          Agnay Srivastava
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
