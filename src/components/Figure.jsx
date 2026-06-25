function Figure({ data }) {
  return (
    <figure>
      <img alt="img-1" src={data.url} />
      <figcaption>{data.desc}</figcaption>
    </figure>
  );
}

export default Figure;