import React from "react";
import Slider from "./Slider";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import fox from "./img/fox.jpg"

function Home() {
	return (
		<>
			<Slider />
			<Container style={{
				paddingTop: "2rem",
				paddingBottom: "2rem"
			}}>
				<Row>
					<Col>
						<Card style={{
							width: "18rem",
							border: "2px solid black"
						}}>
							<Card.Img variant="top" src={fox} />
							<Card.Body>
								<Card.Title>AndersonBlog. Цитаты</Card.Title>
								<Card.Text>Он никогда не сдается заранее. Как бы не было тяжело, как бы не хотелось все бросить, он все равно сделает шаг вперед, забыв эти мысли.</Card.Text>
							</Card.Body>
							<Button variant="primary">Show more</Button>
						</Card>
					</Col>
					<Col>
						<Card style={{
							width: "18rem",
							border: "2px solid black"
						}}>
							<Card.Img variant="top" src={fox} />
							<Card.Body>
								<Card.Title>AndersonBlog. Цитаты</Card.Title>
								<Card.Text>Проигрыш доказывает, что вы слабы? Проигрыш отягощает вас? Разве вы не должны после поражения снова встать? Если останетесь на коленях — это докажет, что вы слабы.</Card.Text>
							</Card.Body>
							<Button variant="primary">Show more</Button>
						</Card>
					</Col>
					<Col>
						<Card style={{
							width: "18rem",
							border: "2px solid black"
						}}>
							<Card.Img variant="top" src={fox} />
							<Card.Body>
								<Card.Title>AndersonBlog. Цитаты</Card.Title>
								<Card.Text>Вместо того, чтобы сдаваться и отчаиваться, что ты не гений. Верь, что твоя сила этим не ограничивается, и продолжай идти всегда вперед.</Card.Text>
							</Card.Body>
							<Button variant="primary">Show more</Button>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Home;