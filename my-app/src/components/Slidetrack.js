import Card from "./Card.js"
{/*may need to set up state in here */}
const cards = [
  { title: "a", img: "https://via.placeholder.com/100", url: "c", description: "d" },
  { title: "e", img: "https://via.placeholder.com/100", url: "g", description: "h" },
  { title: "i", img: "https://via.placeholder.com/100", url: "k", description: "l" },
  { title: "i", img: "https://via.placeholder.com/100", url: "k", description: "l" },
  { title: "i", img: "https://via.placeholder.com/100", url: "k", description: "l" },
  { title: "i", img: "https://via.placeholder.com/100", url: "k", description: "l" }
];

function Cardbuilder() {
  return cards.map((card, key) => <Card key={card + key} cardData={card} />);

}

function Slidetrack() {
  return(
    <div class="container mt-3">
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">{Cardbuilder()}</ul>
          <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">Prev</button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Slidetrack;