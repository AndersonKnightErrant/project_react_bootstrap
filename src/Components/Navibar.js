import React, { useState } from "react";
import { Navbar, Nav, Button, Modal, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NaviBar() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


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
						<Button onClick={handleShow} variant="primary" className="m-1">Log In</Button>
						<Button  variant="primary" className="m-1">Sign out</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Log in</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="fromBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="name@example.com"
								autoFocus
							/>
							<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
						</Form.Group>
						<Form.Group className="mb-3" controlId="fromBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Enter password"
								autoFocus
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="fromBasicCheckBox">
							<Form.Check
								type="checkbox"
								label="Remember me"
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}
