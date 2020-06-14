import React from 'react'
// Images
const firstImage = require('../assets/Home/HomePageImg1.jpg')
const secondImage = require('../assets/Home/HomePageImg2.jpg')


function NoUserSection(props) {
	//fetch request and display according to status
	return (
		<section className="container">
			<div className="row justify-content-around mt-5 pt-3">
				<img className="col-md-5 img-fluid" src={props.image} alt={props.alt} />
				<div className={`col-md-5${(props.reverseOrder)?" order-first":""}`}>
					<h2 className="mt-2">{props.title}</h2>
					<p>
						{props.body}
					</p>
				</div>
			</div>
		</section>
	)
}

// Home
export default class Home extends React.Component {
	render(){
		return (
			<div>
				<NoUserSection
					image={firstImage}
					alt={"Writing desk"}
					title={"Join Madhyam"}
					reverseOrder={false}
					body={`Madhyam is a place for hundreds of creative writers like you.
					Join madhyam today, and share your ideas, feelings and educate the world!
					We are just starting out. So, consider helping if you are interested`}

				/>
				<NoUserSection
					image={secondImage}
					alt={"Typewriter, notebooks, and pen"}
					title={"Unleash the writer inside you"}
					reverseOrder={true}
					body={`This is your place to let it all out. Writing heals you. It 
					strengthens you. It's your time to rise and shine. Write an article, 
					a poem, a short story, or even a completely new piece of writing style.
					Possibilites are limitless. Come, join us!`}

				/>

			</div>
		)
	}
}
