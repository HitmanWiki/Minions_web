import React, { useEffect } from "react";
import $ from "jquery";

function Header() {
  useEffect(() => {
    //SubMenu Dropdown Toggle
    if ($(".menu-area li.menu-item-has-children ul").length) {
      $(".menu-area .navigation li.menu-item-has-children").append(
        '<div className="dropdown-btn"><span className="fas fa-angle-down"></span></div>'
      );
    }

    //Mobile Nav Hide Show
    if ($(".mobile-menu").length) {
      var mobileMenuContent = $(".menu-area .main-menu").html();
      $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

      //Dropdown Button
      $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
        "click",
        function () {
          $(this).toggleClass("open");
          $(this).prev("ul").slideToggle(500);
        }
      );

      //Menu Toggle Btn
      $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
        $("body").removeClass("mobile-menu-visible");
      });
    }
    $(".menu-tigger").on("click", function () {
      $(".extra-info,.offcanvas-overly").addClass("active");
      return false;
    });
    $(".menu-close,.offcanvas-overly").on("click", function () {
      $(".extra-info,.offcanvas-overly").removeClass("active");
    });
  }, []);
  return (
    <header>
      <div className="header-top-area wow" 
               data-animation="fadeInDown"
                      data-delay=".4s"
                      data-duration="2s">
        <div className="container">
          <div className="row "></div>
        </div>
      </div>

      <div id="sticky-header" className="menu-area transparent-header">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="menu-wrap">
                <nav className="menu-nav show">
                  <div className="logo">
                    <a href="/">
                      <img
                        src="assets/img/images/logo.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-xl-flex">
                    <ul className="navigation">
                      <li className="active">
                        <a href="/#banner">HOME</a>
                      </li>
                      <li>
                        <a href="/#about">ABOUT</a>
                      </li>
                      <li>
                        <a href="/#tokenomics">TOKENOMICS</a>
                      </li>
                      <li>
                        <a href="/#join-us">JOIN US</a>
                      </li>
                      <li>
                        <a href="/#roadmap">ROADMAP</a>
                      </li>
                      <li>
                        <a href="/#jackpot">jackpot</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-action">
                    <ul>
                      <li className="header-phone">
                        <a href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xf7168c8abb0ff80116413a8d95396bbdc318a3ff" className="btn" target="_blank">
                          BUY NOW
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/* Mobile Menu  */}

              <div className="menu-backdrop" />
              {/* End Mobile Menu */}
            </div>
          </div>
        </div>
      </div>

      <div className="extra-info">
        <div className="close-icon menu-close">
          <button>
            <i className="fa-regular fa-rectangle-xmark" />
          </button>
        </div>
        <div className="side-logo mb-30">
          <a href="/">
            <img src="assets/img/logo/logo.png" alt="Logo" />
          </a>
        </div>
        {/* <div className="side-info mb-30">
          <div className="contact-list mb-30">
            <h4>Telegram</h4>
            <p>
              123/A, Miranda City Likaoli <br /> Prikano, Dope
            </p>
          </div>
          <div className="contact-list mb-30">
            <h4>Phone Number</h4>
            <p>+0989 756665 9</p>
            <p>+(090) 8667756543 85</p>
          </div>
          <div className="contact-list mb-30">
            <h4>Email Address</h4>
            <p>info@example.com</p>
            <p>example.mail@hum.com</p>
          </div>
        </div> */}
        {/* <ul className="side-instagram">
          <li>
            <a href="/#">
              <img src="assets/img/images/sd_insta01.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="/#">
              <img src="assets/img/images/sd_insta02.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="/#">
              <img src="assets/img/images/sd_insta03.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="/#">
              <img src="assets/img/images/sd_insta04.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="/#">
              <img src="assets/img/images/sd_insta05.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="/#">
              <img src="assets/img/images/sd_insta06.jpg" alt="" />
            </a>
          </li>
        </ul> */}
        <div className="social-icon-right text-center mt-30">
          <a href="/#">
            <i className="fa-brands fa-facebook-f" />
          </a>
          <a href="/#">
            <i className="fa-brands fa-twitter" />
          </a>
          <a href="/#">
            <i className="fa-brands fa-twitch" />
          </a>
          <a href="/#">
            <i className="fa-brands fa-youtube" />
          </a>
        </div>
      </div>
      <div className="offcanvas-overly" />
      {/* offCanvas-menu-end */}
    </header>
  );
}

export default Header;
