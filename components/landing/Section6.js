import React from 'react'
import ReactWOW from 'react-wow'
import * as Icon from 'react-feather';

import '../../static/styles/section6.scss';

const Section6 = (props) => {
    return (
      <section className="section6">
        <div className="vmb-wrapper">
          <div className="vmb-body">
            <div className="vmb-title">
              <h2>Nous croyons en la force du réseau, pour concrétiser</h2>
              <h1>Votre Projet de cession d’entreprise</h1>
            </div>
            <div className="vmb-subtitle">
              Notre équipe experte, forte de son réseau local, se tiens à votre disposition pour vous accompagner dans la vente de votre  activité en Normandie et en Nouvelle Aquitaine.
            </div>
            <div className="vmb-map-container">
              <ReactWOW delay='0.4s' animation='fadeInDown'>
                <img
                  src={require("../../static/images/section6/map.png")}
                  alt="carte france"
                  className="vmb-map"
                />
              </ReactWOW>
              <div className="vmb-map-vignettes">
                <ReactWOW delay='0.4s' animation='fadeInDown'>
                  <img
                    className="vmb-map-vignette vmb-map-vignette-1"
                    src={require("../../static/images/section6/img1.jpg")}
                    alt="commerce 1"
                  />
                </ReactWOW>
                <ReactWOW delay='0.4s' animation='fadeInDown'>
                  <img
                    className="vmb-map-vignette vmb-map-vignette-2"
                    src={require("../../static/images/section6/img2.jpg")}
                    alt="commerce 2"
                  />
                </ReactWOW>
                <ReactWOW delay='0.4s' animation='fadeInDown'>
                  <img
                    className="vmb-map-vignette vmb-map-vignette-3"
                    src={require("../../static/images/section6/img3.jpg")}
                    alt="commerce 3"
                  />
                </ReactWOW>
                <ReactWOW delay='0.4s' animation='fadeInDown'>
                  <img
                    className="vmb-map-vignette vmb-map-vignette-4"
                    src={require("../../static/images/section6/img4.jpg")}
                    alt="commerce 4"
                  />
                </ReactWOW>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Section6
