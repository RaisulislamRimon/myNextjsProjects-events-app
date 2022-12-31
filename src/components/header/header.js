import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img style={{ marginRight: "10px" }} src="" alt="" />
        <Link style={{ marginRight: "10px" }} href="/">
          Home
        </Link>
        <Link style={{ marginRight: "10px" }} href="/events">
          Events
        </Link>
        <Link style={{ marginRight: "10px" }} href="/about-us">
          About us
        </Link>
      </nav>
    </header>
  );
}
