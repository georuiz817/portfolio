import React from 'react'
import {Col, Row } from 'react-bootstrap';

const PinkBack = () => {document.getElementsByTagName('body')[0].style.backgroundColor = 'pink'}
const GreenBack = () => {document.getElementsByTagName('body')[0].style.backgroundColor = '#52ff51'}
const OrangeBack = () => {document.getElementsByTagName('body')[0].style.backgroundColor = 'orange'}
const YellowBack = () => {document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow'}
const BlueBack = () => {document.getElementsByTagName('body')[0].style.backgroundColor = 'blue'}

const EditComp = () => {

  return (
      <div className='Edit-Comp'>
          <div className='edit-comp-header'>
            <p>Edit Form</p>
          </div>
          
          <div className='Editor-row'>
              <Row>
                  <Col>
                  <h2><u>Background Color:</u></h2>
                  <div className='Color-Pal'>
                  <div onClick={BlueBack} className='blue-square'></div>
                  <div onClick={GreenBack} className="green-square"></div>
                  <div onClick={OrangeBack} className="orange-square"></div>
                  <div onClick={PinkBack} className="pink-square"></div>
                  <div onClick={YellowBack} className='yellow-square'></div>
                  </div>
                  </Col>

                  <Col>
                  <h2>Font-Family</h2>
                  </Col>

              </Row>

          </div>
    </div>
   )
  }

export default EditComp