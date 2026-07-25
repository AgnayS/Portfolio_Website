import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <p className="footer-prompt">if ur chill</p>
        <a
          className="footer-cta"
          href="https://tsenta.cal.com/agnay/30min"
        >
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="shell footer-meta">
        <div className="footer-notes">
          <p>© {new Date().getFullYear()} Agnay Srivastava</p>
          <p>Built entirely with AI.</p>
        </div>
        <nav aria-label="Social links">
          <ul>
            <li>
              <a href={site.social.linkedin}>LinkedIn</a>
            </li>
            <li>
              <a href={site.social.github}>GitHub</a>
            </li>
            <li>
              <a href={site.social.x}>X</a>
            </li>
            <li>
              <a href={site.social.instagram}>Instagram</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
