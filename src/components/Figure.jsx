function Figure({ data, onPrev, onNext }) {
  if (!data) return null;

  const { url, desc, title } = data;

  return (
    <section className="mt-3 mb-3">
      <figure>
        <img alt={title} src={url} />
        <figcaption>{desc}</figcaption>
      </figure>

      <div className="d-flex gap-2 mt-3">
        <button type="button" className="btn btn-secondary" onClick={onPrev}>
          이전
        </button>
        <button type="button" className="btn btn-secondary" onClick={onNext}>
          다음
        </button>
      </div>
    </section>
  );
}

export default Figure;
