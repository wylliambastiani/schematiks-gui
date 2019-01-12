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