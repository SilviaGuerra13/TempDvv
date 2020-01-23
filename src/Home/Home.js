import React from "react";
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import CardItem from './CardItem/CardItem';
import concesionaria from '../Assets/img/concesionario.jpg';
import homeimg from '../Assets/img/background.png';

import styles from './styles';

const Home = () => {
  return (
    <div {...styles(homeimg)}>
      <div className="home__image">
        <Row>
          <Col sm="12" md={{ size: 4, offset: 1 }}>
            <h2>Busca el comercio en donde quieras hacer un pago</h2>
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
							title="Agencia de viajes"
							img={concesionaria}
						/>
          </Col>
					<Col sm="6" md="3">
						<CardItem 
							title="Club social y deportivo"
							img={concesionaria}
						/>
          </Col>
					<Col sm="6" md="3">
						<CardItem 
							title="Colegios e instituciones educativas"
							img={concesionaria}
						/>
          </Col>
					<Col sm="6" md="3">
						<CardItem 
							title="Concesionarios"
							img={concesionaria}
						/>
          </Col>
        </Row>
				<Row className="home__cards-padding">
          <Col sm="6" md="3">
            <CardItem 
							title="Conjuntos residenciales"
							img={concesionaria}
						/>
          </Col>
					<Col sm="6" md="3">
						<CardItem 
							title="Fiduciarias y comisionistas"
							img={concesionaria}
						/>
          </Col>
					<Col sm="6" md="3">
						<CardItem 
							title="Hoteles e inmobiliarias"
							img={concesionaria}
						/>
          </Col>
					<Col sm="6" md="3">
						<CardItem 
							title="Impuestos, servicios y notarías"
							img={concesionaria}
						/>
          </Col>
        </Row>
				<Row className="home__cards-padding">
          <Col sm="6" md="3">
            <CardItem 
							title="Industrias y constructoras"
							img={concesionaria}
						/>
          </Col>
					<Col sm="6" md="3">
						<CardItem 
							title="Salud y medicina prepagada"
							img={concesionaria}
						/>
          </Col>
					<Col sm="6" md="3">
						<CardItem 
							title="Servicios públicos"
							img={concesionaria}
						/>
          </Col>
					<Col sm="6" md="3">
						<CardItem 
							title="Otros comercios..."
							img={concesionaria}
						/>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
