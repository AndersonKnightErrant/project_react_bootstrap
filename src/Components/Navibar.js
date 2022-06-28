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
						<NavLink to="/" className="m-1">Home</NavLink>
						<NavLink to="/users" className="m-1">Users</NavLink>
						<NavLink to="/about" className="m-1">About</NavLink>
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
