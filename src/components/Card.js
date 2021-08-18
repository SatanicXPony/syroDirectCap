import Accordion from 'react-bootstrap/Accordion';
import { Card } from 'react-bootstrap'
import './Card.scss';

function DisplayCard({cardData}) {
  return (
      <Card>
          <Card.Img variant="top" src={cardData.image}
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
          </Card>
  );
};
export default DisplayCard;