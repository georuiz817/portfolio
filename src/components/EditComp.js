import React from 'react'
import {Col, Row } from 'react-bootstrap';
const PinkBack = () => {document.getElementsByTagName('body')[0].style.backgroundColor = 'pink'}
const GreenBack = () => {document.getElementsByTagName('body')[0].style.backgroundColor = '#52ff51'}
const OrangeBack = () => {document.getElementsByTagName('body')[0].style.backgroundColor = 'orange'}
const YellowBack = () => {document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow'}
const BlueBack = () => {document.getElementsByTagName('body')[0].style.backgroundColor = 'blue'}

const PinkFont = () => {document.getElementsByTagName('body')[0].style.color = 'pink'}
const GreenFont = () => {document.getElementsByTagName('body')[0].style.color = 'green'}
const OrangeFont = () => {document.getElementsByTagName('body')[0].style.color = 'orange'}
const YellowFont= () => {document.getElementsByTagName('body')[0].style.color = 'yellow'}
const BlueFont = () => {document.getElementsByTagName('body')[0].style.color = 'blue'}

const Arial = () =>{document.getElementsByTagName('body')[0].style.fontFamily = 'Arial'}
const Script = () =>{document.getElementsByTagName('body')[0].style.fontFamily = 'Brush Script MT, Brush Script Std, cursive'}
const Console = () =>{document.getElementsByTagName('body')[0].style.fontFamily = '"Lucida Console", Monaco, monospace'}
const Impact = () =>{document.getElementsByTagName('body')[0].style.fontFamily = 'Impact, Charcoal, sans-serif'}
const Cursive = () =>{document.getElementsByTagName('body')[0].style.fontFamily = 'Apple Chancery, cursive'}


const EditComp = () => {
  return (
      <div className='Edit-Comp'>
          <div className='edit-comp-header'>
            <p>Edit Form</p>
          </div>
          
          <div className='Editor-row'>
            <Row>
              <Col className="bg-color">
                <h2>Background Color</h2>
                <div className='Color-Pal'>
                <div onClick={BlueBack} className='blue-square'></div>
                <div onClick={GreenBack} className="green-square"></div>
                <div onClick={OrangeBack} className="orange-square"></div>
                <div onClick={PinkBack} className="pink-square"></div>
                <div onClick={YellowBack} className='yellow-square'></div>
                </div>

                <h2>Font Color</h2>
                <div className='Color-Pal'>
                <div onClick={BlueFont} className='blue-square'></div>
                <div onClick={GreenFont} className="green-square"></div>
                <div onClick={OrangeFont} className="orange-square"></div>
                <div onClick={PinkFont} className="pink-square"></div>
                <div onClick={YellowFont} className='yellow-square'></div>

                </div>
                
              </Col>

              
              <Col>
                <h2>Font-Family</h2>
                <ul>
                  <li><button onClick={Script}>Script</button></li>
                  <li><button onClick={Console}>Console</button></li>
                  <li><button onClick={Impact}>Impact</button></li>
                  <li><button onClick={Arial}>Arial</button></li>
                  <li><button onClick={Cursive}>Chalk Duster</button></li>
                </ul>
              </Col>

              </Row>
              <p>Refresh to bring changes to default</p>

          </div>
          
    </div>
   )
  }

export default EditComp