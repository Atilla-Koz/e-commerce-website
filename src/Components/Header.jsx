export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Our store</h1>
      <nav className="header__nav">
        <a href="/" className="header__link">
          Home
        </a>
        <a href="/products" className="header__link">
          Products
        </a>
      </nav>
    </header>
  );
}
