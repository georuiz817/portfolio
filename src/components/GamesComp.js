import React from 'react';
import Card from 'react-bootstrap/Card'
import { Container, Col, Row } from 'react-bootstrap';

const GamesComp = () => {
        return (
            <div>
                <Card className='cardEdit' >
                    <Card.Body>
                        Games
                    </Card.Body>         
                </Card>
                
                <Container>
                    <Row>
                        <Col>
                        <p>Gaming has alwasy been a passion of mine. Playing hours non-stop as a kid was one of the pinnacle parts of my child hood. In a way, in got me more in touch with technology, from reading about the most popular games, how they've evolved, and what new systems were coming out with what spec. Even today, I still make sure to pay homage to the games that really attracted me to gaming and the ones I probably spent too much time playing. </p>
                        </Col>

                        <Col>
                        
                        </Col>
                    </Row>
                </Container>
            </div>
            )
        }


export default GamesComp