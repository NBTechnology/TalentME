import React from "react";
import "./Carrousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/Card";

const Carrousel = props => {
  let contentCarousel = [];
  let idItem = 0;
  for (
    let page = 0;
    page < Math.ceil(props.data.length / props.iterator);
    page++
  ) {
    contentCarousel.push(
      <div>
        <div className="carrousel-core">
          {props.data
            .slice(
              idItem,
              idItem + props.iterator > props.data.length
                ? props.data.length
                : (idItem = idItem + props.iterator)
            )
            .map(item => {
              console.log("item", item);
              return (
                <Card
                  key={item.id + "experience"}
                  variant="cardCarrousel"
                  title={item.title}
                  text={item.text}
                  url={item.url}
                />
              );
            })}
        </div>
      </div>
    );
  }
  const content = (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "18px"
      }}
    >
      <Slider {...props.settings}>{contentCarousel}</Slider>
    </div>
  );

  return content;
};

export default Carrousel;
