import React from 'react';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';

import styles from './styles';

const Searchbar = () => {
    return (
        <Row {...styles}>
            <Col sm="12" md={{ size: 5, offset: 1 }} className="home__search">
                <i className="cil-search" />
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
    )
}

export default Searchbar;
