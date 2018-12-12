import React from 'react';
import { Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddServerPage = () => {
  return (
    <div id="add-server-page" className="d-flex align-items-center">
      <div id="add-server-form">
        <label id="add-server-form-title">Add New Server</label>

        <Form>
          <FormGroup>
              <Label for="connectionName">Connection Name:</Label>
              <Input type="text" name="connectionName" id="connectionName" placeholder="Ex: Development Server" />
          </FormGroup>

          <FormGroup>
            <Row>
              <Col>
                <Label for="host">Host:</Label>
                <Input type="text" name="host" id="host" placeholder="Ex: 127.0.0.1" />
              </Col>
              
              <Col>
                <Label for="port">Port:</Label>
                <Input type="number" name="port" id="port" placeholder="Ex: 1234"/>
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col>
                <Label for="User">User:</Label>
                <Input type="text" name="user" id="user" placeholder="Ex: SA" />
              </Col>
              
              <Col>
                <Label for="Password">Password:</Label>
                <Input type="password" name="password" id="password" placeholder="********" />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col>
                <Label>Icon:</Label>
              </Col>
            </Row>
            <div className="icons-container">
              <button className="iconButton">
                <i className="fas fa-database"></i>
              </button>

              <button className="iconButton">
                <i className="fas fa-server"></i>
              </button>

              <button className="iconButton">
                <i className="fab fa-dev"></i>
              </button>

              <button className="iconButton">
                <i className="fas fa-exclamation-triangle"></i>
              </button>

              <button className="iconButton">
                <i className="fab fa-product-hunt"></i>
              </button>

              <button className="iconButton">
                <i className="fas fa-skull-crossbones"></i>
              </button>

              <button className="iconButton">
                <i className="fas fa-bookmark"></i>
              </button>

              <button className="iconButton">
                <i className="fas fa-check-circle"></i>
              </button>

              <button className="iconButton">
                <i className="fas fa-columns"></i>
              </button>

              <button className="iconButton">
                <i class="far fa-hdd"></i>
              </button>
            </div>
            <div className="icons-container">
              <button className="iconButton">
                <i className="fas fa-file"></i>
              </button>

              <button className="iconButton">
                <i className="far fa-grimace"></i>
              </button>
              
              <button className="iconButton">
                <i className="fas fa-hand-spock"></i>
              </button>
              
              <button className="iconButton">
                <i className="far fa-heart"></i>
              </button>

              <button className="iconButton">
                <i className="fab fa-hotjar"></i>
              </button>

              <button className="iconButton">
                <i className="fas fa-lock"></i>
              </button>
              
              <button className="iconButton">
                <i className="fas fa-question-circle"></i>
              </button>
              
              <button className="iconButton">
                <i className="fas fa-search"></i>
              </button>

              <button className="iconButton">
                <i className="fas fa-thumbs-up"></i>
              </button>

              <button className="iconButton">
                <i class="fas fa-hashtag"></i>
              </button>
            </div>
          </FormGroup>

          <FormGroup id="add-server-form-actions" className="float-right">
            <Button color="info">Test</Button>
            <Button color="success">Save</Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default AddServerPage;