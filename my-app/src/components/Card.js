import Accordion from 'react-bootstrap/Accordion';


function Card({cardData}) {
  return (
  <div className="container">
    <div className="row">
      <div className="col-6 col-md-3 mb-5">
        <div className="card, style={width: '18rem;'}">
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
    </div>
  );
};
export default Card;