import React from 'react'



const AboutComp = () => {
 const EducatedClick = (e) => {
   e.preventDefault();
   document.getElementById("about-info").innerHTML = '<p>After graduating with a Bachelors from Stony Brook in 2016, I started working in corporate office environments. I was able to thrive in hands on experience with topics like team building, data management, and corporate best practices.</p> <br> <p>When given a suggestion that I should look into Web Development, I immediately started to do my research. I completed every course possible. Codecademy, Khan Academy, and Free Code Camp were no exceptions. I decided at this point to open up my horizons and enroll in Flatiron Schools Full Stack Web Development boot camp. Six months of team work, independent work, and training on both Front and Back end development has given me the opportunity to display an array of exciting and even some silly portfolio projects.</p>'
 }

 const Learningclick = (e) => {
   e.preventDefault();
   document.getElementById('about-info').innerHTML = `<p>Now being graduated from Flatiron, I'm making sure that I'm constantly learning. Not only have I made sure to practice and add to my projects done through out Flatiron, but I've bene teaching myself new tools to add to my skills. Free courses, Youtube, W3Schools, and searching through the internet are a few ways I have been practicing anything new and exciting.</p> <br> The most important way has been actually coding with them. Any new project I make has been implementing some new tool. Some examples are React Hooks, Sass, Vue, Node.js`
 }

 const Careerclick = (e) => {
   e.preventDefault();
   document.getElementById('about-info').innerHTML = '<p> Primarly looking in the NY area, I’m eager to assist a new business venture as well as bring new insight to an already flourishing one. My unique desire is to not only use my currently demonstrated skills, but to be challenged and given a new set of technical tools to work and learn with so I may grow.</p>'
 }

  return (
      <div className="about-buttons">
        
        <button onClick={EducatedClick}>Educated</button>
        <button onClick={Learningclick}>Contantly Learning</button>
        <button onClick={Careerclick}>Career-Seeking</button>
        <p id="about-info">Click a button!</p>

 

     </div>


    )
}

export default AboutComp