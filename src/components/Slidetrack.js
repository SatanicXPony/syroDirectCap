import DisplayCard from "./Card.js"
import SwiperCore, { Navigation, Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from 'react';
SwiperCore.use([Navigation, Pagination]);

function CardbuilderLocal(){
  const [cardsLocal, setCardsLocal] = useState([
    
  ]);

  useEffect(() => {
    (async() => {
      const response = await fetch(`http://localhost:3001/cardlay/local`, {
        method: "GET",
      });
      const cardData = await response.json();
      setCardsLocal(cardData.cardlays);
    })();
  }, [])

  return cardsLocal.map((card, index) => {
    return <SwiperSlide><DisplayCard key={index} cardData={card} /></SwiperSlide>
  });

}

function CardbuilderNational() {
  const [cardsNational, setCardsNational] = useState([
    
  ]);

  useEffect(() => {
    (async() => {
      const responseNational = await fetch(`http://localhost:3001/cardlay/national`, {
        method: "GET",
      });
      const cardDataNational = await responseNational.json();
      console.log(cardDataNational)
      setCardsNational(cardDataNational.cardlays);
    })();
  }, [])


  return cardsNational.map((card, index) => {
    return <SwiperSlide><DisplayCard key={index} cardData={card} /></SwiperSlide>
  });

}

const Slidetrack = () => {
  return(
    <div>
      <Swiper
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {CardbuilderLocal()}
    </Swiper>
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {CardbuilderNational()}
    </Swiper>
  </div>
);
};

export { Slidetrack };

