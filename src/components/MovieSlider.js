import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { data } from "../common/images";

const MovieSlider = () => {
  return (
    <div id="autoplay-example-heading" className="slider">
      <Splide
        aria-labelledby="autoplay-example-heading"
        hasTrack={false}
        options={{
          type: "loop",
          drag: "",
          arrows: true,
          perPage: 1,
          height: 550,
          width: 1500,
          autoplay: true,
          pagination: true,
          pauseOnHover: false,
          resetProgress: false,
        }}
      >
        <div>
          <SplideTrack>
            {data.map((item) => {
              return (
                <SplideSlide key={item.id}>
                  <div className="img-container" key={item.id}>
                    <img src={item.image} alt={"movie"} />
                  </div>
                </SplideSlide>
              );
            })}
          </SplideTrack>
        </div>
      </Splide>
    </div>
  );
};

export default MovieSlider;
