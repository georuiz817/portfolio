import React from 'react'
import {Container, Col, Row } from 'react-bootstrap';
import EditHelpers from './EditHelpers'

const EditComp = () => {
  return (
    <Container className='Edit-Comp'>
      <div className='edit-comp-header'>
          <p>Edit Form</p>
      </div>
      <Row>
        <Col className='edit-col' sm={3}>
          <h2>Background Color</h2>
          <input type="color" className="ColorPickerName" />
          <br></br>
          <button onClick={EditHelpers.ColorChange}>Change</button>
        </Col>
        <Col className='edit-col' sm={3}>
          <h2>Font Color</h2>
          <input type='color' className="FontColorInput"/>
          <br></br>
          <button onClick={EditHelpers.FontChange}>Change</button>
        </Col>
        <Col className='edit-col' sm={3}>
          <h2>Font-Family</h2>
          <li><button onClick={EditHelpers.Script}>Script</button></li>
          <li><button onClick={EditHelpers.Console}>Console</button></li>
          <li><button onClick={EditHelpers.Impact}>Impact</button></li>
          <li><button onClick={EditHelpers.Arial}>Arial</button></li>
          <li><button onClick={EditHelpers.Cursive}>Chalk Duster</button></li>
        </Col>
        <Col className='edit-col' sm={3}>
          <h2>Cursor</h2>
          <li><button onClick={EditHelpers.CrossHair}>Cross Hair</button></li>
          <li><button onClick={EditHelpers.cell}>Cell</button></li>
          <li><button onClick={EditHelpers.original}>default</button></li>
        </Col>
      </Row>
    <p>Refresh to bring changes to default</p>
    </Container>
   )
  }

export default EditComp