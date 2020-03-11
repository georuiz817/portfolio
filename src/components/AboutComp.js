import React from 'react'
import Card from 'react-bootstrap/Card'
import me from '../photos/me.png'
  
const AboutComp = () => {

  return (
    <div className="about">
        <Card className="cardEdit" > 
          <Card.Body>
            About...
          </Card.Body>
        </Card>

        <br></br>
        <img src={me} alt='n/a'/>
        
 
   
          <h1><u>PRE-TECH</u></h1>
          <p>After graduating with a Bachelors from Stony Brook in 2016, I started working in corporate 
            office environments. I was able to thrive in hands on experience with topics like team building, 
            data management, customer service, and corporate best practices. Feeling that the cubicle life and 
            monotony of Insurance wasn't for me, I decided to start researching into other fields of business.
            When doing my research I had a few things in mind that needed to be required of the field. Creativity,
            spontanuity, and fun were all things I believed would spark my interest.</p> 
 
     
    </div>
    )
  }

export default AboutComp