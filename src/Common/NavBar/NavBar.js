import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from "reactstrap";
import './styles.css';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	
	return (
		<div>
			<Navbar color="danger" light expand="md">
				<NavbarBrand href="/">reactstrap</NavbarBrand>
				<NavbarToggler onClick={toggle}/>
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar></Nav>
					<Nav navbar>
						<NavItem>
							<NavLink href="/components/">Components</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">Components</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">Components</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">Components</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}


export default NavBar;
