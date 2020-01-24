import React from "react";
import { Row, Col } from 'reactstrap';
import Searchbar from '../Common/Searchbar/Searchbar';
import CardItem from './CardItem/CardItem';
import travels from '../Assets/img/01.png';
import sports from '../Assets/img/02.png';
import schools from '../Assets/img/03.png';
import dealership from '../Assets/img/concesionario.jpg';
import residency from '../Assets/img/05.png';
import commission from '../Assets/img/06.png';
import hotels from '../Assets/img/07.png';
import notaries from '../Assets/img/08.png';
import industries from '../Assets/img/09.png';
import medicine from '../Assets/img/10.png';
import publicService from '../Assets/img/11.png';
import otherComercies from '../Assets/img/12.png';
import homeimg from '../Assets/img/background.png';

import styles from './styles';

const Home = () => {
  return (
    <div {...styles(homeimg)}>
      <div className="home__image">
        <Row>
          <Col sm="12" md={{ size: 5, offset: 1 }}>
            <h3>Busca el comercio en donde quieras hacer un pago</h3>
          </Col>
        </Row>
        <Searchbar />
      </div>
      <div className="home__cards">
        <h3>Categorías de comercios</h3>
        <Row className="home__cards-padding">
          <Col sm="6" md="3">
						<CardItem 
							title="Agencia de viajes"
							img={travels}
						/>
          </Col>
					<Col sm="6" md="3">
						<CardItem 
							title="Club social y Deportivo"
							img={sports}
						/>
          </Col>
					<Col sm="6" md="3">
						<CardItem 
							title="Colegios e instituciones educativas"
							img={schools}
						/>
          </Col>
					<Col sm="6" md="3">
						<CardItem 
							title="Concesionarios"
              img={dealership}
						/>
          </Col>
        </Row>
				<Row className="home__cards-padding">
          <Col sm="6" md="3">
            <CardItem 
							title="Conjuntos residenciales"
							img={residency}
						/>
          </Col>
					<Col sm="6" md="3">
						<CardItem 
							title="Fiduciarias y comisionistas"
              img={commission}
						/>
          </Col>
					<Col sm="6" md="3">
						<CardItem 
							title="Hoteles e inmobiliarias"
							img={hotels}
						/>
          </Col>
					<Col sm="6" md="3">
						<CardItem 
							title="Impuestos, servicios, notarías"
							img={notaries}
						/>
          </Col>
        </Row>
				<Row className="home__cards-padding">
          <Col sm="6" md="3">
            <CardItem 
							title="Industrias y constructoras"
							img={industries}
						/>
          </Col>
					<Col sm="6" md="3">
						<CardItem 
							title="Salud y medicina prepagada"
							img={medicine}
						/>
          </Col>
					<Col sm="6" md="3">
						<CardItem 
							title="Servicios públicos"
							img={publicService}
						/>
          </Col>
					<Col sm="6" md="3">
						<CardItem 
							title="Otros comercios..."
							img={otherComercies}
						/>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
