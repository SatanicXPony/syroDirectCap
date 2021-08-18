import DisplayCard from "./Card.js"
import SwiperCore, { Navigation, Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from 'react';
SwiperCore.use([Navigation, Pagination]);

function Cardbuilder() {
  const [cards, setCards] = useState([
    // { title: "Follow The Orange", 
    //   img: "https://images.app.goo.gl/dT3VhMYMmM2TYRia8", 
    //   url: "https://wastefreephd.com/2020/03/01/follow-the-orange-a-guide-to-waste-reduction-in-syracuse-ny/", 
    //   description: "A local guide to sustainability resources" 
    // },
    // { title: "Apple Store Destiny USA", 
    //   img: "https://images.app.goo.gl/k6UnpJpvWuoyZwS26", 
    //   url: "https://www.apple.com/recycling/nationalservices/", 
    //   description: "Apple Store Recycling Program" 
    // },
    // { title: "i", img: "https://via.placeholder.com/100", url: "k", description: "l" },
    // { title: "i", img: "https://via.placeholder.com/100", url: "k", description: "l" },
    // { title: "i", img: "https://via.placeholder.com/100", url: "k", description: "l" },
    // { title: "i", img: "https://via.placeholder.com/100", url: "k", description: "l" }
  ]);



  useEffect(() => {
    (async() => {
      const response = await fetch(`http://localhost:3001/cardlay/local`, {
        method: "GET",
      });
      const cardData = await response.json();
      console.log(cardData)
      setCards(cardData.cardlays);
    })();
  }, [])


  return cards.map((card, index) => {
    console.log(card)
    return <SwiperSlide><DisplayCard key={index} cardData={card} /></SwiperSlide>
  });

}

const Slidetrack = () => {
  return(
    <Swiper
    spaceBetween={10}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log("slide change")}
  >
    {Cardbuilder()}
  </Swiper>
);
};

export { Slidetrack };

