import React from "react";
import { Modal } from "react-bootstrap";
import MysteryButton from "./MysteryButton"

class MainSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      modal: false,
    };
  }

  handleShow() {
    this.setState({ show: true });
    window.dotq = window.dotq || [];
    window.dotq.push({
      projectId: "10000",
      properties: {
        pixelId: "10176003",
        userEmail: "<email_address>",
        qstrings: {
          et: "custom",
          ec: "token",
        },
      },
    });
    // console.log(window.dotq);
  }

  fireMintButton() {
    window.dotq = window.dotq || [];
    window.dotq.push({
      projectId: "10000",
      properties: {
        pixelId: "10176003",
        userEmail: "<email_address>",
        qstrings: {
          et: "custom",
          ec: "mint",
        },
      },
    });

    // console.log(window.dotq);
  }

  openModal() {
    this.setState({ modal: true });
    window.dotq = window.dotq || [];
    window.dotq.push({
      projectId: "10000",
      properties: {
        pixelId: "10176003",
        userEmail: "<email_address>",
        qstrings: {
          et: "custom",
          ec: "discord",
        },
      },
    });
    // console.log(window.dotq);
  }
  render() {
    return (
      <div
        id="banner"
        className="slider-active"
        style={{ position: "relative" }}
      >
        <div className="single-slider" style={{ zIndex: 2 }}>
          <div className="banner-area banner-bg">
            {/* <video className="bannerVideo" autoPlay muted loop poster="https://media.discordapp.net/attachments/1024011585473228870/1102292775187271690/000956.81e87104.2973334561.png">
              <source src="" type="video/mp4" />
            </video> */}
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="banner-content text-center">
                    <h2
                      className="title"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                      data-duration="2s"
                    >
                      KEK
                    </h2>
                    <h4
                      className="sub-title"
                    >
                      GOD OF MEMES
                    </h4>
                    <MysteryButton />
                  </div>
                  <div className="header-img-wrap wow fadeInUp"
                  data-wow-delay=".2s"
                  data-wow-duration="1.5s">
                      <img
                        src="https://media.discordapp.net/attachments/901500120271581204/1103342689778421840/pepe_egyptian_pyramid4.png"
                        alt=""
                      ></img>
                    </div>
                </div>
              </div>

            </div>
            
          </div>
        </div>

        {/* <div className="single-slider">
          <div className="banner-area banner-bg">
            <video className="bannerVideo" autoPlay muted loop poster="assets/img/banner/banner_bg02.jpg">
              <source src="assets/img/banner/video_01.mp4" type="video/mp4" />
            </video>
            
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="banner-content text-center">
                    <h4 className="sub-title" data-animation="fadeInUp" data-delay=".2s" data-duration="2s">Phobospc game nft</h4>
                    <h2 className="title" data-animation="fadeInUp" data-delay=".4s" data-duration="2s">ecosystem</h2>
                    <p data-animation="fadeInUp" data-delay=".6s" data-duration="2s">Phobos - We have developed an ecosystem for a Play 2 Earn Battle Royale PC game powered by NFTs with its own Integrated Cross-Chain NFT-Marketplace. We are pushing the boundaries of what blockchain technology can achieve.  P2E Gaming is the future. Join Katana and be a part of the future.</p>
                    <div className="banner-btn-wrap">
                      <a href="/#" className="btn" target="_blank" data-animation="fadeInLeft" data-delay=".8s" data-duration="2s">
                        OPENSEA
                      </a>
                      <a href="/#" className="btn"  data-animation="fadeInRight" data-delay=".8s" data-duration="2s" onClick={() => this.handleShow() }>
                        buy token
                      </a>
                      <a href="/#" className="btn"  data-animation="fadeInRight" data-delay=".8s" data-duration="2s" onClick={() => this.openModal() }>
                        Discord/Telegram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="p-5">
            <p>
              <a
                className="btn d-block btn-primary"
                href="/#"
                rel="noreferrer"
                target="_blank"
              >
                Uniswap
              </a>
            </p>
            <p>
              <a
                className="btn d-block"
                href="/#"
                rel="noreferrer"
                target="_blank"
              >
                Pancake Swap
              </a>
            </p>
            <p>
              <a
                className="btn d-block btn-success"
                href="/#"
                rel="noreferrer"
                target="_blank"
              >
                Bitmart
              </a>
            </p>
            <p>
              <a
                className="btn d-block btn-danger"
                href="/#"
                rel="noreferrer"
                target="_blank"
              >
                Hotbit
              </a>
            </p>
            <p>
              <a
                className="btn d-block btn-secondary"
                href="/#"
                rel="noreferrer"
                target="_blank"
              >
                Probit
              </a>
            </p>
          </Modal.Body>
        </Modal>
        <Modal
          show={this.state.modal}
          onHide={() => this.setState({ modal: false })}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="p-5">
            <p>
              <a
                className="btn d-block"
                target="_blank"
                rel="noreferrer"
                href="/#"
                style={{ background: "#0077b5" }}
              >
                <i
                  className="fab fa-telegram"
                  style={{ marginRight: "15px" }}
                ></i>
                <span>Telegram</span>
              </a>
            </p>
            <p>
              <a
                className="btn d-block"
                target="_blank"
                rel="noreferrer"
                href="/#"
                style={{ background: "#FF4301" }}
              >
                <i
                  className="fab fa-discord"
                  style={{ marginRight: "15px" }}
                ></i>
                <span>Discord</span>
              </a>
            </p>
          </Modal.Body>
        </Modal>

      </div>
    );
  }
}

export default MainSlider;
