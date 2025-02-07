import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/img/spman1.jpg",
    title: "Explorando nuevos horizontes",
    description: "Descubre cómo la creatividad y la innovación pueden transformar el mundo digital y expandir tu visión artística."
  },
  {
    image: "/img/karakter-ntr-sea-key-dock.jpg",
    title: "Concept Art y su impacto",
    description: "Desde la imaginación hasta la realidad, el arte conceptual es clave en la producción visual y el desarrollo de proyectos."
  },
  {
    image: "/img/friendly-robot-020-too-far-away-2560-001.jpg",
    title: "Tecnología y diseño juntos",
    description: "La inteligencia artificial revoluciona la ilustración y redefine el futuro del diseño con nuevas posibilidades creativas."
  },
  {
    image: "/img/anato-finnstark-anato-finnstark-web-petit-1fdg.jpg",
    title: "Ilustración y arte digital",
    description: "Explora el poder de la ilustración en la era digital y cómo puede dar vida a conceptos visuales con un estilo único."
  },
  {
    image: "/img/tumblr_de58418d9a10389607969b5def68f8d1_0076bfa1_2048.jpg",
    title: "Diseño y animación gráfica",
    description: "Sumérgete en el mundo de la animación y el diseño en movimiento para contar historias de manera dinámica y atractiva."
  },
  {
    image: "/img/gaelle-seguillon-gaelle-seguillon-balaur-bondoc-portrait-web.jpg",
    title: "Escultura y modelado 3D",
    description: "Explora las técnicas más avanzadas de modelado en 3D y cómo dar vida a tus ideas con realismo y profundidad."
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setPreviousIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex]);

  const goToNext = () => {
    setPreviousIndex(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevious = () => {
    setPreviousIndex(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full lg:h-screen md:h-3/4 h-1/3 flex items-center justify-between">
      {/* CONTROLES DE NAVEGACIÓN */}
      <div className="flex space-x-3 ml-44 self-end lg:mb-32 md:mb-16 mb-8">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-zinc-800 text-white p-4 rounded"
        >
          {isPlaying ? (
            <img className="w-4 h-4" src="/img/pausa.png" alt="Pause" />
          ) : (
            <img className="w-4 h-4" src="/img/jugar.png" alt="Play" />
          )}
        </button>
        <button
          onClick={goToPrevious}
          className="bg-zinc-800 text-white p-4 rounded"
        >
          <img className="w-4 h-4" src="/img/izqarrow.png" alt="Previous" />
        </button>
        <button
          onClick={goToNext}
          className="bg-zinc-800 text-white p-4 rounded"
        >
          <img className="w-4 h-4" src="/img/dchaarrow.png" alt="Next" />
        </button>
      </div>

      {/* SLIDER PRINCIPAL (a la derecha) */}
      <div className="w-3/5 h-2/3 ml-20 overflow-hidden relative">
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0) 50%)",
            opacity: 1
          }}
        />
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt="Slide Background"
            className={`absolute top-0 left-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out ${
              index === currentIndex
                ? "translate-x-0 opacity-100"
                : index === previousIndex
                ? "-translate-x-full opacity-0"
                : "translate-x-full opacity-0"
            }`}
          />
        ))}
      </div>

      {/* CONTENEDOR DOTS + TEXTO */}
      <div className="absolute lg:top-48 md:top-32 top-10 left-44 z-10">
        <div className="relative w-[500px]">
          <img
            src="/img/dots3.png"
            alt="Dots Decor"
            className="w-8/12 md:w-10/12 lg:w-max mx-auto opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center lg:w-10/12 md:w-5/12 w-3/12">
            {slides.map((slide, index) => {
              const titleWords = slide.title.toUpperCase().split(" ");
              let middleIndex = Math.floor(titleWords.length / 2);

              if (titleWords.length === 2) {
                middleIndex = 1;
              }
              if (titleWords.length > 4) {
                middleIndex = Math.ceil(titleWords.length / 2);
              }

              const firstLine = titleWords.slice(0, middleIndex).join(" ");
              const secondLine = titleWords.slice(middleIndex).join(" ");

              return (
                <div
                  key={index}
                  className={`absolute text-white transition-all duration-700 ease-in-out ${
                    index === currentIndex
                      ? "lg:translate-x-[12%] md:translate-x-[80%] translate-x-[80%] opacity-100 z-10"
                      : index === previousIndex
                      ? "-translate-x-[100%] opacity-0 z-10"
                      : "translate-x-[250%] opacity-0 z-0"
                  }`}
                >
                  <h1 className="text-sm md:text-lg lg:text-4xl font-extrabold font-oswald uppercase leading-tight">
                    <span className="text-white block ">{firstLine}</span>
                    <span className="text-red-500 block">{secondLine}</span>
                  </h1>
                  <p
                    className="text-xs md:text-sm lg:text-lg text-gray-300 mt-2"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                  >
                    {slide.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* INDICADORES DE SLIDES */}
      <div className="flex flex-col space-y-4 lg:mr-16 md:mr-8 mr-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setPreviousIndex(currentIndex);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 transition-all duration-300 ${
              currentIndex === index ? "bg-red-500 scale-[2.5]" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
