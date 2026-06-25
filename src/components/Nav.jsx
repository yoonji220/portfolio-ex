function Nav({ data, onChangeMode }) {
  const lists = data.map(work => (
    <li key={work.id}>
      <a
        href=""
        onClick={e => {
          e.preventDefault();
          onChangeMode(work.id);
        }}
      >
        {work.title}
      </a>
    </li>
  ));

  return (
    <nav>
      <ul>{lists}</ul>
    </nav>
  );
}

export default Nav;
