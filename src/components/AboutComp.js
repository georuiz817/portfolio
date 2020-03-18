import React from 'react'
import Card from 'react-bootstrap/Card'
import me_beer from '../photos/me_beer.jpg'
import { Container, Col, Row } from 'react-bootstrap';
import oregon from '../photos/oregontrailme.png'

const AboutComp = () => {

  return (
    <div className="about">
        
        <Container>
          <div className='about-cont'>
          <img src={oregon} alt='n/a' width='100%' height='350px'/>
          <br></br>
          <br></br>
          <Row>
          <Col>
            <img src={me_beer} alt='n/a'width='90%'/>
          </Col>
          
          <Col>
          <div className='about-block'> 
          <h3>Hi I'm George!</h3>
          <p><i>NY based Developer with a passion for everything Front End</i></p>
          ***
          <h3>pre-tech</h3>
          <p>After graduating with a Bachelors from Stony Brook in 2016, I started working in corporate 
          office environments. I was able to thrive in hands on experience with topics like team building, 
          data management, customer service, and corporate best practices. Feeling that the cubicle life and 
          monotony of Insurance wasn't for me, I decided to start researching into other fields of business.
          When doing my research I had a few things in mind that needed to be required of the field. Creativity,
          spontanuity, and fun were all things I believed would spark my interest.</p> 
          ***
          <h3>Tech</h3>
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
          <p></p>
          </div>
          
          </Col>
        
        </Row>
        </div>


        </Container>

        <br></br>

    </div>
    )
  }

export default AboutComp

