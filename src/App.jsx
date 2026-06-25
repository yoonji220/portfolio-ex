import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Figure from "./components/Figure";
import { useState } from "react";

function App() {
  const works = [
    {
      id: 1,
      title: "work 1",
      url: "images/img-1.jpg",
      desc: "Work 1 description",
    },
    {
      id: 2,
      title: "work 2",
      url: "images/img-2.jpg",
      desc: "Work 2 description",
    },
    {
      id: 3,
      title: "work 3",
      url: "images/img-3.jpg",
      desc: "Work 3 description",
    },
    {
      id: 4,
      title: "work 4",
      url: "images/img-4.jpg",
      desc: "Work 4 description",
    },
    {
      id: 5,
      title: "work 5",
      url: "images/img-1.jpg",
      desc: "Work 5 description",
    },
    {
      id: 6,
      title: "work 6",
      url: "images/img-2.jpg",
      desc: "Work 6 description",
    },
    {
      id: 7,
      title: "work 7",
      url: "images/img-3.jpg",
      desc: "Work 7 description",
    },
    {
      id: 8,
      title: "work 8",
      url: "images/img-4.jpg",
      desc: "Work 8 description",
    },
  ];

  const [id, setId] = useState(1);
  const work = works.find(w => w.id === id);

  const handlePrev = () => {
    setId(prevId => (prevId === 1 ? works.length : prevId - 1));
  };

  const handleNext = () => {
    setId(prevId => (prevId === works.length ? 1 : prevId + 1));
  };

  return (
    <>
      <Header
        onChangeMode={() => {
          setId(1);
        }}
      />
      <Nav
        data={works}
        id={id}
        onChangeMode={id => {
          setId(id);
        }}
      />

      {work && <Figure data={work} />}

      <div className="d-flex gap-2 mt-3">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handlePrev}
        >
          이전
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleNext}
        >
          다음
        </button>
      </div>
    </>
  );
}

export default App;
