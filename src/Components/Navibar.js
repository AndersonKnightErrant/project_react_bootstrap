import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NaviBar() {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand>Anderson blog</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={NavLink} to="/">Home</Nav.Link>
						<Nav.Link as={NavLink} to="/users">Users</Nav.Link>
						<Nav.Link as={NavLink} to="/about">About</Nav.Link>
					</Nav>
					<Nav>
						<Button variant="primary" className="m-1">Log In</Button>
						<Button variant="primary" className="m-1">Sign out</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
