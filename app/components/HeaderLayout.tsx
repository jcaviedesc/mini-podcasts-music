import Link from "next/link";

export function HeaderLayout() {
  return (
    <header className="header-layout">
      <div className="header-conent">
        <Link href="/">
          <p className="title">Podcaster</p>
        </Link>
      </div>
    </header>
  );
}
