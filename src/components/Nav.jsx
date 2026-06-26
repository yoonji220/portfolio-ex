function Nav({ data, id, onChangeMode }) {
  const lists = data.map(work => (
    <li key={work.id}>
      <button
        aria-current={work.id === id ? true : false}
        type="button"
        className={`btn ${
          work.id === id ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={() => {
          onChangeMode(work.id);
        }}
      >
        {work.title}
      </button>
    </li>
  ));

  return (
    <nav>
      <ul className="d-flex flex-column gap-2">{lists}</ul>
    </nav>
  );
}

export default Nav;
