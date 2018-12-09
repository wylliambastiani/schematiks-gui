import React from 'react';
import { Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

    {/*  connectionName, host, port, user, password, icon */}

const AddServerPage = () => {
  return (
    <div id="add-server-page" class="d-flex align-items-center">
      <div id="add-server-form">
        <label id="add-server-form-title">Add New Server</label>

        <Form>
          <FormGroup>
              <Label for="connectionName">Connection Name:</Label>
              <Input type="text" name="connectionName" id="connectionName" placeholder="Ex: Development Server" />
          </FormGroup>

          <FormGroup>
            <Row>
              <Col xs="12" md="6" lg="6" >
                <Label for="host">Host:</Label>
                <Input type="text" name="host" id="host" placeholder="Ex: 127.0.0.1" />
              </Col>
              
              <Col xs="12" md="6" lg="6" >
                <Label for="port">Port:</Label>
                <Input type="number" name="port" id="port" placeholder="Ex: 1234"/>
              </Col>
            </Row>
          </FormGroup>

        </Form>
      </div>
    </div>
  );
};

export default AddServerPage;