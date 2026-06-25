function Figure({ data }) {
  if (!data) return null;

  const { url, desc, title } = data;

  return (
    <figure>
      <img alt={title} src={url} />
      <figcaption>{desc}</figcaption>
    </figure>
  );
}

export default Figure;
