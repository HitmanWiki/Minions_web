import React from "react";

function Token() {
  return (
    <section id="tokenomics" className="token-area pt-115 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-60">
              <h2 className="title">
                <span>KEK</span>ONOMICS
              </h2>
            </div>
          </div>
        </div>
        <div className="token-box-wrap">
          <div className="row align-items-end">
          {/* <div className="col-lg-12">
          <img
                  src="https://media.discordapp.net/attachments/1024011585473228870/1103431948849918052/pro.png"
                  alt=""
                />
          </div> */}
            <div className="col-lg-6">
              <div className="token-content mb-65">
                <h2 className="title" style={{ color: "#fff" }}>
                NO TAX, NO NONSENSE!
                </h2>
                <p>
                In the magical realm, the $KEKE project has transformed. 92.3% tokens are in liquidity pool, LP tokens burnt, and contract renounced. The remaining 7.7% resides in a multi-sig wallet for future centralized exchange listings and liquidity pools, trackable via the blockchain. KEK, the crypto god, bestows prosperity on its followers with zero taxes for $KEKE transactions. The economy thrives with KEK's guidance and the faithful reap the rewards.
                </p>
                <a href="/#" target="_blank" rel="noreferrer">
                  Check our Tokenomics
                </a>
              </div>
              <div className="token-img text-center wow fadeInUp"
                  data-wow-delay=".2s"
                  data-wow-duration="1.5s">
                <img
                  src="assets/img/images/kingkek.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="token-item mb-20">
                <div className="token-content-wrap">
                  <h2 className="title">
                    TAX <span>0%</span>
                  </h2>
                </div>
                <ul className="token-list">
                  <li></li>
                  <li>NO TAX, NO NONSENSE!</li>
                  <li></li>
                </ul>
              </div>
              <div className="token-item mb-20">
                <div className="token-content-wrap">
                  <h2 className="title">
                    locked <span>7.7%</span>
                  </h2>
                </div>
                <ul className="token-list">
                  <li>5% CEX Listings</li>
                  <li>2.7% Treasury</li>
                  <li></li>
                </ul>
              </div>
              <div className="token-item mb-20">
                <div className="token-content-wrap">
                  <h2 className="title">
                    lp
                    <span>92.3%</span>
                  </h2>
                </div>
                <ul className="token-list">
                  <li></li>
                  <li>lp tokens burnt <a href="https://etherscan.io/token/0xdbb9f25705e66385efdd92e333d3bbb3fce13bc2?a=0x000000000000000000000000000000000000dead" target="_blank" style={{textDecoration: 'underline'}}>click here</a></li>
                  <li></li>
                </ul>
              </div>
              <div className="token-item mb-20">
                <div className="token-content-wrap">
                  <h2 className="title">total</h2>
                  <h2 className="title">
                    <span>SUPPLY</span>
                  </h2>
                </div>
                <ul className="token-list">
                  <li> </li>
                  <li>77,777,777,777,777 $KEKE</li>
                  <li> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Token;
