import React from "react";
import { Carousel } from "react-bootstrap";
import fox from "./img/fox.jpg"

export default function Slider() {
	return (
		<>
			<Carousel>
				<Carousel.Item style={{"height": "600px"}}>
					<img
						className="d-block w-100"
						src={fox} alt=""
					/>
					<Carousel.Caption>
						<h3>--all very good--</h3>
						<p>you are the happiest person in the world</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item style={{"height": "600px"}}>
					<img
						className="d-block w-100"
						src={fox} alt=""
					/>
					<Carousel.Caption>
						<h3>--all very good--</h3>
						<p>you are the happiest person in the world</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item style={{ "height": "600px" }}>
					<img
						className="d-block w-100"
						src={fox} alt=""
					/>
					<Carousel.Caption>
						<h3>--all very good--</h3>
						<p>you are the happiest person in the world</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
}
