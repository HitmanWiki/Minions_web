import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Ecosystem extends React.Component {
  state = {
    value: '0xf7168c8abb0ff80116413a8d95396bbdc318a3ff',
    copyText: 'copy contract address',
    copied: false,
  };
  render() {
  return (
	 <section id="join-us" className="ecosystem-area wow fadeInUp"
   data-wow-delay=".2s"
   data-wow-duration="1.5s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="s-about-title">
                <h2 className="title">tHE <span>EMPIRE</span></h2>
              </div>
              <div className="s-about-content">
                <p>Block by block, brick by brick, as a unified cult community, we shall erect the most colossal and illustrious pyramid in the vast expanse of the crypto realm. KEK will reveal the birthplace of all memes and exert its dominance in the industry. 
                </p>
                <p>
                It was stealth launched, and its contract was renounced, with the LP forever and ever. $KEK's power will revolutionize the meme society, and everyone will recognize its magical origin.
                </p>
                <div className="about-btn-wrap">
                <CopyToClipboard text={this.state.value}
                onCopy={() => {
                  this.setState({copied: true, copyText: 'copied'})
                  setTimeout(()=> {
                    this.setState({copied: false, copyText: 'copy contract address'})
                    document.getElementById("copy-button")
                  },1000)
                  }}>
                <a id="copy-button" className="btn discord"  style={{backgroundColor: '#38953c', color: '#fff'}}><i className="fa-brands fa-ethereum"/>{this.state.copyText}</a>
                </CopyToClipboard>
                </div>
                <div className="about-btn-wrap" style={{marginTop: '0px'}}>
          
                 <a href="https://t.me/kingdomofkek" className="btn discord" target="_blank"><i className="fa-brands fa-telegram" /> telegram</a>
                 <a href="https://twitter.com/kingdomofkek" className="btn discord" target="_blank"><i className="fa-brands fa-twitter" /> twitter</a>
                 <a href="https://www.reddit.com/r/kingdomofkek/" className="btn discord" target="_blank"><i className="fa-brands fa-reddit" /> reddit</a>
                 <a href="https://www.youtube.com/@kingdomofkek" className="btn discord" target="_blank"><i className="fa-brands fa-youtube" /> youtube</a>
                 <a href="https://medium.com/@kingdomofkek" className="btn discord" target="_blank"><i className="fa-brands fa-medium" /> medium</a>
                 <a href="https://www.dexview.com/eth/0xf7168c8AbB0ff80116413a8d95396BBdC318A3fF" className="btn discord" target="_blank"><i className="fa fa-line-chart" /> chart</a>

                 {/* <a href="/#" className="btn" target="_blank">OPENSEA</a> */}
                 
               </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="s-about-img">
                <img src="https://media.discordapp.net/attachments/1024011585473228870/1102350367842377818/KEK_website_elon_musk.png?width=835&height=905" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
  }
}

export default Ecosystem