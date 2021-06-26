function Card({cardData}) {
  /* 
  *cardData = { title, img, url, description }
  */

  console.log(cardData)

  return (
  <div className="col-6 col-md-3 mb-5">
    <div class="card glide__slide">
      <img className="card-img-top" src={cardData.img}
          alt="Placeholder for Site logo link" />
      <div className="card-body">
          <p className="card-text">{cardData.title}</p>
          <p className="card-text">{cardData.description}
          </p>
      </div>
    </div>
  </div>
  )
}
export default Card;