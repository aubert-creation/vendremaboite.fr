import React from 'react'
import ReactWOW from 'react-wow'
import * as Icon from 'react-feather';

const Section2 = (props) => {

    return (
      <section className="section2">
        <div className="row">
          <div className="col-md-12 vmb-wrapper">
            <div className="col-md-6 vmb-body">
              <h3>Nous prenons tout en main pour vous <span>accompagner</span></h3>
              <div className="col-md-12">
                <ReactWOW delay='0.4s' animation='fadeInLeft'>
                  <img
                      src={require('../../static/images/section2/check.png')}
                      className="section-check"
                      alt="man"
                  />
                </ReactWOW>
                <span>Un premier entretien pour comprendre vos besoins</span>
              </div>
              <div className="col-md-12">
                <ReactWOW delay='0.6s' animation='fadeInLeft'>
                  <img
                      src={require('../../static/images/section2/check.png')}
                      className="section-check"
                      alt="man"
                  />
                </ReactWOW>
                <span>Un <b>interlocuteur unique</b> tout au long du Process</span>
              </div>
              <div className="col-md-12">
                <ReactWOW delay='0.8s' animation='fadeInLeft'>
                  <img
                      src={require('../../static/images/section2/check.png')}
                      className="section-check"
                      alt="man"
                  />
                </ReactWOW>
                <span>Selection active et rigoureuse du<b> bon acquéreur </b></span>
              </div>
              <div className="col-md-12">
                <ReactWOW delay='1.0s' animation='fadeInLeft'>
                  <img
                      src={require('../../static/images/section2/check.png')}
                      className="section-check"
                      alt="man"
                  />
                </ReactWOW>
                <span>La négociation de votre affaire pour une vente réussie</span>
              </div>
              <div className="col-md-12">
                <ReactWOW delay='1.2s' animation='fadeInLeft'>
                  <img
                      src={require('../../static/images/section2/check.png')}
                      className="section-check"
                      alt="man"
                  />
                </ReactWOW>
                <span><b>Discrétion assurée </b>de la prise de contact jusqu’à la vente finale</span>
              </div>
            </div>
            <div className="col-md-6 vmb-image-wrapper">
              <ReactWOW delay='0.4s' animation='fadeInRight'>
                <img
                    src={require('../../static/images/section2/accompagner.png')}
                    className="vmb-image"
                    alt="man"
                />
              </ReactWOW>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Section2
