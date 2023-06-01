import React from 'react'
import Slider from 'react-slick';
import MysteryButton from "./MysteryButton2"

function Hero() {
	const settings = {

	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	centerMode: true,
	centerPadding: '0',
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
	}
  return (

	      <section id="jackpot" className="hero-area hero-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-60">
                <h2 className="title">WIN THE <span>JACKPOT</span></h2>
              </div>
			  <div className='win'>
			  <p>Welcome, brave souls, to our mystical gambling function, "Unlock the Secret"! Prepare to embark on a thrilling gambling adventure where chance and fortune collide. With a variety of probabilities, including 1 in 7, 1 in 14, and 1 in 21, players have the opportunity to unlock mysteries and receive rewards (initial wager * X). But beware: the game resets after the final probability stage to 1 in 7.</p>
				<div className='row'>
					<div className='col col-12 col-md-6 mb-20'>
					<div className="token-item">
                <div className="token-content-wrap">
                  <h2 className="title">
                    POT <span>70%</span>
                  </h2>
                </div>
                <ul className="token-list">
                  <li>70% of earnings go to the pot</li>
                </ul>
              </div>
					</div>
					<div className='col col-12 col-md-6 mb-20'>
					<div className="token-item">
                <div className="token-content-wrap">
                  <h2 className="title">
                    kek <span>30%</span>
                  </h2>
                </div>
                <ul className="token-list">
                  <li>30% to marketing / exchange</li>
                </ul>
              </div>
					</div>
				</div>
			  <div>

			  </div>
			
				<p>Double your wager by winning. Play for<span> 0.0007 ETH</span>, claim your riches!</p>
			  </div>
			 
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <Slider className="hero-active" {...settings}>
            <div className="hero-item">
              <img src="https://media.discordapp.net/attachments/1024011585473228870/1102567238478856264/kek_frog.png" alt="" />
            </div>
            {/* <div className="hero-item">
              <img src="assets/img/images/hero_img02.png" alt="" />
            </div>
            <div className="hero-item">
              <img src="assets/img/images/hero_img03.png" alt="" />
            </div>
            <div className="hero-item">
              <img src="assets/img/images/hero_img04.png" alt="" />
            </div>
            <div className="hero-item">
              <img src="assets/img/images/hero_img05.png" alt="" />
            </div>
            <div className="hero-item">
              <img src="assets/img/images/hero_img05.png" alt="" />
            </div> */}
          </Slider>
        </div>
		<MysteryButton />
      </section>
  )
}

export default Hero