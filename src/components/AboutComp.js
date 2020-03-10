import React from 'react'
import Card from 'react-bootstrap/Card'
import { Container,Col,Row } from 'react-bootstrap';

const AboutComp = () => {

  return (
    <div className="about">
      <Container>
        <Card className="cardEdit" > 
          <Card.Body>
            About...
          </Card.Body>
        </Card>
        
        <br></br>


    
        <Row>
          <Col>
          <Card className='pre-tech-card'> 
          <p><u>PRE-TECH</u></p>
          <p>After graduating with a Bachelors from Stony Brook in 2016, I started working in corporate 
            office environments. I was able to thrive in hands on experience with topics like team building, 
            data management, customer service, and corporate best practices. Feeling that the cubicle life and 
            monotony of Insurance wasn't for me, I decided to start researching into other fields of business.
            When doing my research I had a few things in mind that needed to be required of the field. Creativity,
            spontanuity, and fun were all things I believed would spark my interest.</p> 
            </Card>
            </Col>
            <Col>
            <Card className='pre-tech-card'> 
          <p><u>Researching Development</u></p>
          <p>When given a suggestion that I should look into Web Development, I immediately started to do my 
            research. I completed every credible course possible. Codecademy, Khan Academy, and Free Code Camp 
            were no exceptions. I decided at this point to take Web Development to the next level and 
            enroll in Flatiron School.</p>
          <p>p.s for a good laugh at sites I novicly created pre Flatiron: </p>
          <p><a href='https://codepen.io/RuizDev'>here</a></p>
            </Card>
            </Col>
            </Row>
  
 


        <Card className='pre-tech-card'> 
          <p><u>TECH</u></p>
          <p>During Flatiron School I had the oppourtunity to engage in six months of team work, independent work, and 
            training on both Front and Back end development with tools like ruby/rails, JavaScript, SQL, HTML, CSS, React.js, Redux, etc.
            My time at Flatiron has given me the opportunity to display an array of exciting and even some 
            silly portfolio projects. Now being a tech grad, I'm ready to branch out into the development work force 
            to assist a new business venture as well as bring new insight to an already flourishing one.</p>
          <p>While my time is being spent searching and discussing potential companies to start a career in, I'm also
            making sure that my time with hands on development is getting the care it needs. Since my time at Flatiron I've almost 
            doubled my amount of projects I have to showcase and have learned some really exciting things along the way. Being able to add
            things like Sass and React Hooks to my skill set has made working with design and React based projects more enjoyable and diverse. 
            As well as having a better overall grip on Vanilla JS as I continue to practice algothirms and code challenges daily. Whether I'm on
            the internet surfing for oppourtunities or studying blogs, podcast, articles, code challenges etc. My times is strictly put towards the 
            Development.
             </p>
        </Card>
      </Container>
    </div>
    )
  }

export default AboutComp