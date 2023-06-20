import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function EmblaCarousel(props) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide) => (
          <img key={slide.id} src={slide.url}></img>
        ))}
      </div>
    </div>
  );
}

export default EmblaCarousel;
