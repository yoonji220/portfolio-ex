function Header({ onChangeMode }) {
  return (
    <header>
      <h1 className="mb-4" onClick={onChangeMode}>
        My works
      </h1>
    </header>
  );
}

export default Header;
