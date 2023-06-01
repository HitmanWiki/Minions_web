import React from "react";
import { Modal } from "react-bootstrap";

class MysteryButton extends React.Component {
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
      <>
  <div className="banner-btn-wrap">
                      {/* <a href="/#" className="btn" target="_blank" data-animation="fadeInLeft" data-delay=".8s" data-duration="2s" >
                        buy token
                      </a>
                      
                      <a href="/#" className="btn"  data-animation="fadeInRight" data-delay=".8s" data-duration="2s" onClick={() => this.handleShow() }>
                        whitepaper
                      </a> */}
                      <a
                        className="btn"
                        data-animation="bounceIn"
                        data-delay=".8s"
                        data-duration="1s"
                        onClick={() => this.openModal()}
                      >
                        Unlock the Secret
                      </a>
                    </div>
     

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
          <Modal.Body className="p-5 bg-yellow">
          <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="banner-content text-center">
                  <div className="coming-soon-img-wrap">
                      <img
                        src="https://media.tenor.com/cnqQQTnIPSQAAAAM/smile-smirk.gif"
                        alt=""
                      ></img>
                    </div>
                    <h4
                      className="sub-title"
                    >
                      COMING SOON
                    </h4>
    
                  </div>
                </div>
              </div>

            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default MysteryButton;
