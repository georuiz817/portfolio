import React from 'react'
import {Col, Row } from 'react-bootstrap';
import EditHelpers from './EditHelpers'

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
                <div onClick={EditHelpers.BlueBack} className='blue-square'></div>
                <div onClick={EditHelpers.GreenBack} className="green-square"></div>
                <div onClick={EditHelpers.OrangeBack} className="orange-square"></div>
                <div onClick={EditHelpers.PinkBack} className="pink-square"></div>
                <div onClick={EditHelpers.YellowBack} className='yellow-square'></div>
                </div>
            </Col>

              <Col>
              <h2>Font Color</h2>
                <div className='Color-Pal'>
                <div onClick={EditHelpers.BlueFont} className='blue-square'></div>
                <div onClick={EditHelpers.GreenFont} className="green-square"></div>
                <div onClick={EditHelpers.OrangeFont} className="orange-square"></div>
                <div onClick={EditHelpers.PinkFont} className="pink-square"></div>
                <div onClick={EditHelpers.YellowFont} className='yellow-square'></div>
                </div>
              
              </Col>

              
              <Col>
                <h2>Font-Family</h2>
                <ul>
                  <li><button onClick={EditHelpers.Script}>Script</button></li>
                  <li><button onClick={EditHelpers.Console}>Console</button></li>
                  <li><button onClick={EditHelpers.Impact}>Impact</button></li>
                  <li><button onClick={EditHelpers.Arial}>Arial</button></li>
                  <li><button onClick={EditHelpers.Cursive}>Chalk Duster</button></li>
                </ul>
              </Col>

              <Col>
              <h2>Cursor</h2>
              <li><button onClick={EditHelpers.crossHair}>Cross Hair</button></li>
              <li><button onClick={EditHelpers.cell}>Cell</button></li>
              <li><button onClick={EditHelpers.original}>default</button></li>
              </Col>

              </Row>
              <p>Refresh to bring changes to default</p>

          </div>
          
    </div>
   )
  }

export default EditComp