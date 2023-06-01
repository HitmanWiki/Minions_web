import React from "react";

function AboutArea() {
  return (
    <section id="about" className="about-area about-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-6">
            <div className="about-title wow fadeInUp"
                  data-wow-delay=".2s"
                  data-wow-duration="1.5s">
                  <h2 className="title">
                    WHAT <span className="sun"></span> IS KEK?
                  </h2>
              <div className="about-content">
                <h6 className="rotate-content">the god of memes</h6>
                {/* <h2 className="title">Welcome to the <span>kingdom of kek</span></h2> */}
                <p>
                Introducing KEK, the new crypto meme project based on the popular Cult of Kek meme culture. This project is inspired by the ancient Egyptian god Kek, often portrayed as a frog or frog-headed man,  and the term "Kek" is very populair on 4chan and Twitch. The project aims to use memetic magic to influence the crypto world. Join us in the KEK community and enjoy the hilarious memes that we have to offer.
                  <a href="/#" target="_blank" rel="noreferrer">
                    {" "}
                  </a>
                </p>

                <h4 className="small-title">The 7 KEK commandments</h4>
                <p className="price">
                  1 <span> Thou shalt join </span> thy fellow hodlers on a quest to build the glorious Kingdom of KEK
                </p>
                <p className="price">
                  2 <span> Thou shalt practice </span> the craft of meme magic every day and scatter its potency to the world through the sacred art of KEK.
                </p>
                <p className="price">
                  3 <span>  Thou shalt assemble </span> thine own shill squad, for guidance from KEK shall be thy bounty
                </p>
                <p className="price">
                  4 <span> Thou shalt </span> bow in obedience on all social channels
                </p>
                <p className="price">
                  5 <span> Ascend beyond the mortal plebs </span> to become an officially ordained keeper of KEK
                </p>
                <p className="price">
                  6 <span> Conceal thy true power level </span> for the uninitiated normies tremble at its very mention
                </p>
                <p className="price">
                  7 <span> Purchase each and every dip </span> for thy humble sacrifice shall be richly rewarded within the grand realm of KEK
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="-img-wrap wow bounceIn"         
                        data-delay=".8s"
                        data-duration="1s">
              <img
                src="assets/img/images/logo.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <div className="s-about-wrap">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="s-about-title">
                <h2 className="title">
                  BUILD AN EMPIRE WITH <span>$KEK</span>
                </h2>
              </div>
              <div className="s-about-content">
                <p>
                  $KEK will reveal the birthplace of all memes and exert its
                  dominance in the industry. It was stealth launched, and its
                  contract was renounced, with LP locked for 777 months. $KEK's
                  power will revolutionize the meme society, and everyone will
                  recognize its magical origin.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="s-about-img">
                <img
                  src="https://cdn.discordapp.com/attachments/904424760505688145/1101589728924549251/Kek2C_the_Meme_Goddess.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default AboutArea;
