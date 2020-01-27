import React from 'react';
import { Row, Col } from "reactstrap";
import vigilado from '../../Assets/img/vigilado.png';

import styles from './styles';

const Footer = () => {
    return (
        <div {...styles}>
            <Row>
                <Col sm="12" md="2" className="footer__img">
                    <div><img src={vigilado}/></div>
                </Col>
                <Col sm="12" md="5" className="footer__text">
                    <h6>Banco Davivienda S.A. todos los derechos reservados 2020</h6>
                </Col>
            </Row>
        </div>
    )
}

export default Footer
