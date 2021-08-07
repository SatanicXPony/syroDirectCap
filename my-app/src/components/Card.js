import Accordion from 'react-bootstrap/Accordion'

function Card({cardData}) {
 
  return (
  <div className="row conainer-fluid">
    <div className="col-6 col-md-3 mb-5">
      <div className="card">
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
    </div>
  )
}
export default Card;