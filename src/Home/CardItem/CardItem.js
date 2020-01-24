import React from "react";
import { Card, Media } from "reactstrap";
import styles from "./styles";

const CardItem = props => {
  return (
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
  );
};

export default CardItem;
