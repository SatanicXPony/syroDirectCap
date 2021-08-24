import DisplayCard from "./Card.js"
import runtimeEnv from '@mars/heroku-js-runtime-env';
//import { useAuth0 } from '@auth0/auth0-react';
import SwiperCore, { Navigation, Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from 'react';
SwiperCore.use([Navigation, Pagination]);


function CardbuilderLocal(){
  const [cardsLocal, setCardsLocal] = useState([
  
  ]);


  let apiURL = 'http://localhost:3001';
  if (runtimeEnv.REACT_APP_BACKEND_URL){
    apiURL = runtimeEnv.REACT_APP_BACKEND_URL;
  }

  useEffect(() => {
    (async() => {
      const response = await fetch(`${apiURL}/cardlay/local`, {
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

  let apiURL = 'http://localhost:3001';
  if (runtimeEnv.REACT_APP_BACKEND_URL){
    apiURL = runtimeEnv.REACT_APP_BACKEND_URL;
  }

  useEffect(() => {
    (async() => {
      const responseNational = await fetch(`${apiURL}/cardlay/national`, {
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

