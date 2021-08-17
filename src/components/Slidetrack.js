import DisplayCard from "./Card.js"
import SwiperCore, { Navigation, Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from 'react';
SwiperCore.use([Navigation, Pagination]);

function Cardbuilder() {
  const [cards, setCards] = useState([
    { title: "a", img: "https://via.placeholder.com/100", url: "c", description: "d" },
    { title: "e", img: "https://via.placeholder.com/100", url: "g", description: "h" },
    { title: "i", img: "https://via.placeholder.com/100", url: "k", description: "l" },
    { title: "i", img: "https://via.placeholder.com/100", url: "k", description: "l" },
    { title: "i", img: "https://via.placeholder.com/100", url: "k", description: "l" },
    { title: "i", img: "https://via.placeholder.com/100", url: "k", description: "l" }
  ]);



  useEffect(() => {
    async(() => {
      const response = await fetch(`postgress://brandymack@localhost:54321/syrodirect`, {
        method: "GET",
      });
      const cardData = await response.json();

      setCards(cardData.cardlay);
    })();
  }, [])


  return cards.map((card, index) => {
    return <DisplayCard key={index} cardData={card} />
  });

}

const Slidetrack = () => {
  return(
    <Swiper
    spaceBetween={10}
    slidesPerView={'auto'}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log("slide change")}
  >
    <SwiperSlide>{Cardbuilder()}</SwiperSlide>
    ...
  </Swiper>
);
};

export { Slidetrack };

