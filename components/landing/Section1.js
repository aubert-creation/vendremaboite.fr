import React from 'react'
import ReactWOW from 'react-wow'
import * as Icon from 'react-feather';

const Section1 = () => {
    return (
      <section className="section1">
        <div className="container">
          <div className="row m-t-40">
            <div className="col-md-12 m-t-60 m-b-30">
              <h2><span>Plus</span> rapide... <span>Plus</span> facile</h2>
              <div className="col-md-6 m-b-50">
                <p>Parce qu’entreprendre  la  vente  d’une  affaire,  d’un  commerce,  d’une grande entreprise ou encore d’un bâtiment est un process complexe  et  singulier,  nous  souhaitons  vous  apporter  des  solutions innovantes et un suivi ultra personnalisé...</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-box">
                <div className="icon">
                  <img
                      src={require("../../static/images/section1/timer.png")}
                      className="wow fadeInLeft"
                      data-wow-delay="0.6s"
                      alt="carpet"
                  />
                </div>
                <h3>30<span>min</span></h3>
                <p>C’est le temps qu’il nous faudra pour un premier entretient afin de définir vos besoins</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-box">
                <div className="icon">
                  <img
                      src={require("../../static/images/section1/hands.png")}
                      className="wow fadeInLeft"
                      data-wow-delay="0.6s"
                      alt="carpet"
                  />
                </div>
                <h3>50 %</h3>
                <p>C’est le gain de temps moyen acquit sur la vente d’une affaire par le biais d’un expert</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-box">
                <div className="icon">
                  <img
                      src={require("../../static/images/section1/files.png")}
                      className="wow fadeInLeft"
                      data-wow-delay="0.6s"
                      alt="carpet"
                  />
                </div>
                <h3>2h</h3>
                <p>C’est le temps moyen par jour consacré au montage de votre dossier sans expertise extérieure</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-box">
                <div className="icon">
                  <img
                      src={require("../../static/images/section1/golf.png")}
                      className="wow fadeInLeft"
                      data-wow-delay="0.6s"
                      alt="carpet"
                  />
                </div>
                <h3>120</h3>
                <p>C’est le temps en minutes, que vous auriez pu consacrer à jour au golf, ou bien d’autres choses</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Section1
