import React from "react";
import { Card, Media } from 'reactstrap';
import styles from './styles';

const CardItem = (props) => {
  return (
    <Card {...styles}>
      <Media>
        <Media left href="#">
          <Media
            object
            src={props.img}
            alt="Concesionario"
          />
        </Media>
        <Media body>
          <Media heading>Media heading</Media>
        </Media>
      </Media>
    </Card>
  );
};

export default CardItem
