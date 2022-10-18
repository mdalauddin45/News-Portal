import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2">
            <h2>side nave</h2>
          </Col>
          <Col>
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <h2>right nave</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
