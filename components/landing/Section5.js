import React from 'react'
import ReactWOW from 'react-wow'
import * as Icon from 'react-feather';

const Section5 = (props) => {
    return (
      <section className="section5">
        <div className="row">
          <div className="col-md-12 m-t-60 m-b-30 vmb-wrapper">
            <div className="col-md-6 vmb-image-wrapper">
              <ReactWOW delay='0.5s' animation='fadeIn'>
                <img
                    src={require('../../static/images/section5/commerce.png')}
                    className="section-image"
                    alt="man"
                />
              </ReactWOW>
            </div>
            <div className="col-md-6 vmb-body">
              <div className="vmb-slide">
                <h2><span>Notre expertise</span> au service de</h2>
                <div className="col-md-12">
                  <h4><span>></span>Votre commerce</h4>
                  <p>La vente d’un commerce est singulière. Elle dépend de multiples facteurs. Votre commerce est l’oeuvre d’une vie. Vous la connaissez mieux que personne. Faire en sorte qu’il parte entre bonne main et rapidement, c’est notre mission.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Section5
