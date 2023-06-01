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
                        href="/#about"
                        className="btn"
                        data-animation="bounceIn"
                        data-delay=".8s"
                        data-duration="1s"
                        // onClick={() => this.openModal()}
                      >
                        Enter The Kingdom
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
      </>
    );
  }
}

export default MysteryButton;
