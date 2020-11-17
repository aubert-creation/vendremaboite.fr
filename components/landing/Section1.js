import React from 'react'
import ReactWOW from 'react-wow'
import * as Icon from 'react-feather';

import '../../static/styles/section1.scss';

const Section1 = () => {
    return (
      <section className="section1">
        <div className="container">
          <div className="row m-t-40">
            <div className="section-header col-md-12 m-t-60 m-b-30">
              <h2><span>Notre expertise</span> pour bien vendre son entreprise</h2>
              <div className="col-sm-10 col-lg-6 m-b-60 m-t-20">
                <p>Parce qu’entreprendre la vente d’une affaire, d’un commerce, d’une entreprise ou encore de votre local commercial est un processus complexe et singulier, nous souhaitons vous apporter un <span>suivi complet</span> et ultra personnalisé, en toute discrétion… Vendremaboite, c’est une <span>vision nouvelle</span> de la cession d’entreprise !</p>
              </div>
            </div>
            <div className="vmb-card col-lg-3 col-md-6 col-sm-10 m-b-40">
              <div className="single-box">
                <div className="icon">
                  <ReactWOW delay='0.4s' animation='fadeInDown'>
                    <img
                      src={require("../../static/images/section1/timer.png")}
                      alt="icon timer"
                    />
                  </ReactWOW>
                </div>
                <h3>30<span>min</span></h3>
                <p>C’est le temps qu’il nous faudra pour un premier entretien afin de définir vos besoins</p>
              </div>
            </div>
            <div className="vmb-card col-lg-3 col-md-6 col-sm-10 m-b-40">
              <div className="single-box">
                <div className="icon">
                  <ReactWOW delay='0.5s' animation='fadeInDown'>
                    <img
                      src={require("../../static/images/section1/hands.png")}
                      alt="icon mains"
                    />
                  </ReactWOW>
                </div>
                <h3>50<span>%</span></h3>
                <p>C’est le gain de temps moyen acquit sur la vente d’une affaire par le biais d’un expert</p>
              </div>
            </div>
            <div className="vmb-card col-lg-3 col-md-6 col-sm-10 m-b-40">
              <div className="single-box">
                <div className="icon">
                  <ReactWOW delay='0.6s' animation='fadeInDown'>
                    <img
                      src={require("../../static/images/section1/files.png")}
                      alt="icon files"
                    />
                  </ReactWOW>
                </div>
                <h3>1<span>an</span></h3>
                <p>C’est le temps moyen consacré par un entrepreneur à la bonne préparation de la vente de son entreprise</p>
              </div>
            </div>
            <div className="vmb-card col-lg-3 col-md-6 col-sm-10 m-b-40">
              <div className="single-box">
                <div className="icon">
                  <ReactWOW delay='0.7s' animation='fadeInDown'>
                    <img
                      src={require("../../static/images/section1/golf.png")}
                      alt="icon golf"
                    />
                  </ReactWOW>
                </div>
                <h3>2<span>h</span></h3>
                <p>C’est le temps gagné sur votre vente que vous pourrez consacrer à jour au golf, ou bien d’autres choses…</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Section1
