import React, { useState } from "react";
import { Row, Col, Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem, NavLink } from "reactstrap";
import logo from '../../Assets/img/dvvlogo.png';
import styles from './styles.js';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	
	return (
		<div {...styles}>
			<Navbar color="danger" light expand="md">
				<Row>
					<Col sm="12" md="3">
						<NavbarBrand href="https://www.davivienda.com/wps/portal/personas/nuevo">
							<img src={logo} />
						</NavbarBrand>
					</Col>
					<Col sm="6" md="2">
						<a>Pagos virtuales</a>
					</Col>
					<Col sm="6" md="7">
						<NavbarToggler onClick={toggle}/>
						<Collapse isOpen={isOpen} navbar>
							<Nav className="mr-auto" navbar></Nav>
							<Nav navbar>
								<NavItem>
									<NavLink href="https://psedian.pse.com.co/PSEHostingUI/DIANTicketOffice.aspx?Banco=1051" target="_blank">Impuestos</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="https://servicio.nuevosoi.com.co/soi/index.do?codigoBanco=51" target="_blank">Seguridad social</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="https://www.zonapagos.com/ws_cartera_davivienda/index.aspx" target="_blank">Productos Davivienda</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="#">Volver</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Col>
				</Row>
			</Navbar>
		</div>
	);
}


export default NavBar;
