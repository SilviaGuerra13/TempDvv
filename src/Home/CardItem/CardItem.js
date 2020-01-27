import React from "react";
import { Col, Card, Media } from "reactstrap";
import styles from "./styles";

const CardItem = props => {
  return (
    <Col sm="6" md="3">
      <Card {...styles}>
        <a href="#">
          <Media>
            <Media left href="#">
              <Media object src={props.img} alt="Concesionario" />
            </Media>
            <Media body>
              <Media>{props.title}</Media>
            </Media>
          </Media>
        </a>
      </Card>
    </Col>
  );
};

export default CardItem;
