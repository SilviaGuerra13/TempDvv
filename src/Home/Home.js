import React from "react";
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import CardItem from './CardItem/CardItem';
import concesionaria from '../Assets/img/concesionario.jpg'
import styles from './styles';

const Home = () => {
  return (
    <div {...styles}>
      <div className="home__image">
        <Row>
          <Col sm="12" md={{ size: 7, offset: 1 }}>
            <h2>Busca el comercio en donde quieras</h2>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="exampleSearch" />
              <Input
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="Buscar comercio"
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
      <div className="home__cards">
        <h3>Categorías de comercios</h3>
        <Row className="home__cards-padding">
          <Col sm="6" md="3">
            <CardItem 
							img={concesionaria}
						/>
          </Col>
					<Col sm="6" md="3">
						<CardItem />
          </Col>
					<Col sm="6" md="3">
						<CardItem />
          </Col>
					<Col sm="6" md="3">
						<CardItem />
          </Col>
        </Row>
				<Row>
          <Col sm="6" md="3">
            <CardItem />
          </Col>
					<Col sm="6" md="3">
						<CardItem />
          </Col>
					<Col sm="6" md="3">
						<CardItem />
          </Col>
					<Col sm="6" md="3">
						<CardItem />
          </Col>
        </Row>
				<Row>
          <Col sm="6" md="3">
            <CardItem />
          </Col>
					<Col sm="6" md="3">
						<CardItem />
          </Col>
					<Col sm="6" md="3">
						<CardItem />
          </Col>
					<Col sm="6" md="3">
						<CardItem />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
