//import Accordion from 'react-bootstrap/Accordion';
import {Container, Row, Col, Card} from 'react-bootstrap'

function DisplayCard({cardData}) {
  return (
      <Card>
        <Card style={{width: '18rem'}}>
          <Card.Img variant="top" src={cardData.img}
              alt="Placeholder for Site logo link" 
              style={{cursor: "pointer"}} 
              onClick={()=>{
                window.open("https://google.com")
                }}/>
                {/* <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{cardData.title}</Accordion.Header>
                  <Accordion.Body>{cardData.description}</Accordion.Body>
                </Accordion.Item>
              </Accordion> */}
            </Card>
          </Card>
  );
};
export default DisplayCard;