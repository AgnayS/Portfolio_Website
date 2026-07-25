import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <div className="shell">
        <p className="section-kicker">404</p>
        <h1>This page wandered off.</h1>
        <p>The useful parts are still where they should be.</p>
        <Link className="button button-primary" href="/">
          Back home
        </Link>
      </div>
    </main>
  );
}
