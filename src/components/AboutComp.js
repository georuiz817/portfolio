import React from 'react'
import {Col, Row } from 'react-bootstrap';
import oregon from '../photos/oregontrailme.png'
import stony from '../photos/stonyb.jpg'
import cert from '../photos/cert.jpg'
import wp from '../photos/wp.png'

const AboutComp = () => {

  return (
  <div className="about">
      <img src={oregon} alt='n/a' width='100%' height='300px'/>
      <br></br>
      <br></br>
      
      <Row>
        <Col sm={6}>
          <div className='about-blocks'>
            <h1>Pre Tech</h1>
            <p>Stony Brook Graduate, Insurance career</p>
            <hr></hr><br></br><br></br>
            <p>After graduating with a Bachelors from Stony Brook in 2016, I started working in corporate 
            office environments. I was able to thrive in hands on experience with topics like team building, 
            data management, customer service, and corporate best practices. Feeling that the cubicle life and 
            monotony of Insurance wasn't for me, I decided to start researching into other fields of business.
            When doing my research I had a few things in mind that needed to be required of the field. Creativity,
            spontanuity, and fun were all things I believed would spark my interest
            </p>
          </div>
        </Col>
        
        <Col sm={6}>
          <img src={stony} width='100%' height='100%' alt='n/a'/>
        </Col>
      </Row>
      <br></br>
          
      <Row>
        <Col sm={6}>
          <div className='about-blocks'>
            <h1>Generated A New Love</h1>
            <p>Tech in all forms</p>
            <hr></hr><br></br><br></br>
            <p>During Flatiron School I had the oppourtunity to work within an intensive training program designed to equip New Yorkers with the skills necessary to launch careers in web development. The program included roughly five months of intensive, full-time online training, including classes/lectures, individual, pair and group programming projects, code challenges, presentations and more. 
            I was given the oppourtunity to have studied a variety of web development languages, frameworks, and libraries in-depth, including Ruby, Rails, Sinatra, Javascript, jQuery, SQL, ActiveRecord, Git, HTML, CSS and Bootstrap. As well as collaborated on project teams to develop and present a variety of web-based applications and build web development skills and efficiency.
            </p>
          </div>
        </Col>
            
        <Col sm={6}>
          <img src={cert}  height='100%' alt='n/a' width='100%' />
        </Col>
      </Row>
      <br></br>
      
      <Row>
        <Col sm={6}>
          <div className='about-blocks'>
            <h1>Where I am now</h1>
            <p>Constantly learning, career seeking, and building</p>
            <hr></hr><br></br><br></br>
            <p>While my time is being spent searching and discussing potential companies to start a career in, I'm also
            making sure that my time with hands on development is getting the care it needs. Since my time at Flatiron I've almost 
            doubled my amount of projects I have to showcase and have learned some really exciting things along the way. Being able to add
            things like Sass and React Hooks to my skill set has made working with design and React based projects more enjoyable and diverse. 
            As well as having a better overall grip on Vanilla JS as I continue to practice algothirms and code challenges daily. Whether I'm on
            the internet surfing for oppourtunities or studying blogs, podcasts, articles, code challenges etc. My times is strictly put towards  
            development.</p>
            </div>
        </Col>
        
        <Col sm={6}>
          <img src={wp} alt='n/a' height='100%' width='100%'/>
        </Col>
      </Row>

    <br></br>
  </div>
  )
}

export default AboutComp