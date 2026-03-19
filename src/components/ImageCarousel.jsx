import { useState } from "react";
import { motion } from "framer-motion";

function ImageCarousel({ images, title }) {
  const [index, setIndex] = useState(0);

  const goNext = () => setIndex((prev) => (prev + 1) % images.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-2xl border border-white/10">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`${title} screenshot ${index + 1}`}
          loading="lazy"
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="h-[42vh] min-h-[240px] w-full bg-black/20 object-contain p-2"
        />

        <button
          type="button"
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/45 px-3 py-1.5 text-lg font-bold text-white transition hover:bg-black/70"
          aria-label="Previous image"
        >
          {"<"}
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/45 px-3 py-1.5 text-lg font-bold text-white transition hover:bg-black/70"
          aria-label="Next image"
        >
          {">"}
        </button>
      </div>

      <div className="mt-3 flex justify-center gap-2">
        {images.map((path, dotIndex) => (
          <button
            key={path}
            type="button"
            aria-label={`Go to image ${dotIndex + 1}`}
            onClick={() => setIndex(dotIndex)}
            className={`h-2.5 w-2.5 rounded-full transition ${dotIndex === index ? "bg-accent" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
