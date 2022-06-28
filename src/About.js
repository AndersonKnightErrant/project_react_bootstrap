import fox from "./img/fox.jpg"

function About() {
	return (
		<>
			<div className="About" style={{
				"height": "600px",
				
			}} >
				<h1>About</h1>
				<br />
				<div style={{
					"max-width": "500px",
					"margin": "0 auto"
				}}>
					<p >Данный проект чисто эксперементальный, частично подсмотренный, частично дополненый и никакой интелектуальной собственности не имеет. Может кому он поможет ответить на некоторые вопросы. Я же просто дурачюсь. Кстати. Прикольная лиса на заставке блюющая радугой :) </p>
				</div>
				<div>
					<img src={fox} alt="" style={{
						"width": "400px",
						"margin": "20px 0px"
					}} />
				</div>
			</div>
		</>
	);
}

export default About;
