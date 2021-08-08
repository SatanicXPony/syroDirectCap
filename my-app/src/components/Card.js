//import Accordion from 'react-bootstrap/Accordion';
import {Container, Row, Col, Card} from 'react-bootstrap'

function DisplayCard({cardData}) {
  return (
  <Container>
    <Row xs={6} md={12}>
      <Col> 
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
        </Col>
      </Row>
    </Container>
  );
};
export default DisplayCard;