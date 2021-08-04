import Accordion from 'react-bootstrap/Accordion'

function Card({cardData}) {
  /* 
  *cardData = { title, img, url, description }
  */

  console.log(cardData)

  return (
  <div className="col-6 col-md-3 mb-5">
    <div class="card glide__slide">
      <img className="card-img-top" src={cardData.img}
          alt="Placeholder for Site logo link" 
          style={{cursor: "pointer"}} 
          onClick={()=>{
            window.open("https://google.com")
            }}/>
           <Accordion>
             <Accordion.Item eventKey="0">
              <Accordion.Header>{cardData.title}</Accordion.Header>
                <Accordion.Body>{cardData.description}</Accordion.Body>
             </Accordion.Item>
          </Accordion>
    </div>
  </div>
  )
}
export default Card;