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
                <ReactWOW delay='0.2s' animation='fadeInLeft'>
                  <img
                      src={require('../../static/images/section2/check.png')}
                      className="section-check"
                      alt="man"
                  />
                </ReactWOW>
                <span>Un premier entretien pour comprendre vos besoins</span>
              </div>
              <div className="col-md-12">
                <ReactWOW delay='0.4s' animation='fadeInLeft'>
                  <img
                      src={require('../../static/images/section2/check.png')}
                      className="section-check"
                      alt="man"
                  />
                </ReactWOW>
                <span>La <b>construction collaborative</b> de votre dossier</span>
              </div>
              <div className="col-md-12">
                <ReactWOW delay='0.6s' animation='fadeInLeft'>
                  <img
                      src={require('../../static/images/section2/check.png')}
                      className="section-check"
                      alt="man"
                  />
                </ReactWOW>
                <span>La diffusion de votre annonce pour trouver  <b> le bon acquéreur </b></span>
              </div>
              <div className="col-md-12">
                <ReactWOW delay='0.8s' animation='fadeInLeft'>
                  <img
                      src={require('../../static/images/section2/check.png')}
                      className="section-check"
                      alt="man"
                  />
                </ReactWOW>
                <span>La négociation de votre affaire pour une vente réussie</span>
              </div>
            </div>
            <div className="col-md-6 vmb-image-wrapper">
              <ReactWOW delay='0.5s' animation='fadeInRight'>
                <img
                    src={require('../../static/images/section2/accompagner.png')}
                    className="section-image"
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
