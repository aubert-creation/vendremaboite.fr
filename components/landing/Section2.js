import React from 'react'
import ReactWOW from 'react-wow'
import * as Icon from 'react-feather';

import '../../static/styles/section2.scss';

const Section2 = (props) => {

    return (
      <section className="section2">
        <div className="row">
          <div className="col-md-12 vmb-wrapper">
            <div className="col-md-6 vmb-body">
              <h3>Nous prenons tout en main pour vous <span>accompagner</span></h3>
              <div>
                <ReactWOW delay='0.4s' animation='fadeInLeft'>
                  <img
                      src={require('../../static/images/section2/check.png')}
                      className="section-check"
                      alt="man"
                  />
                </ReactWOW>
                <p>Un premier entretien pour comprendre vos besoins</p>
              </div>
              <div >
                <ReactWOW delay='0.6s' animation='fadeInLeft'>
                  <img
                      src={require('../../static/images/section2/check.png')}
                      className="section-check"
                      alt="man"
                  />
                </ReactWOW>
                <p>Un <b>interlocuteur unique</b> tout au long du Process</p>
              </div>
              <div>
                <ReactWOW delay='0.8s' animation='fadeInLeft'>
                  <img
                      src={require('../../static/images/section2/check.png')}
                      className="section-check"
                      alt="man"
                  />
                </ReactWOW>
                <p>Selection active et rigoureuse du<b> bon acquéreur </b></p>
              </div>
              <div >
                <ReactWOW delay='1.0s' animation='fadeInLeft'>
                  <img
                      src={require('../../static/images/section2/check.png')}
                      className="section-check"
                      alt="man"
                  />
                </ReactWOW>
                <p>La négociation de votre affaire pour une vente réussie</p>
              </div>
              <div>
                <ReactWOW delay='1.2s' animation='fadeInLeft'>
                  <img
                      src={require('../../static/images/section2/check.png')}
                      className="section-check"
                      alt="man"
                  />
                </ReactWOW>
                <p><b>Discrétion assurée </b>de la prise de contact jusqu’à la vente finale</p>
              </div>
            </div>
            <div className="col-md-6 vmb-image-wrapper">
              <ReactWOW delay='0.4s' animation='fadeIn'>
                <img
                    src={require('../../static/images/section2/accompagner.jpg')}
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
