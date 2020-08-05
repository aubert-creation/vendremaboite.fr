import React from 'react'
import ReactWOW from 'react-wow'
import * as Icon from 'react-feather';

const Section3 = (props) => {
    return (
      <section className="section3">
        <div className="container">
          <div className="row m-t-40">
            <div className="col-md-12 m-t-60 m-b-30">
              <div className="col-md-6"><h2>Réussir <span>avec succès</span> toutes les étapes qui composent une vente</h2></div>
              <div className="col-md-6 m-b-30">
                <p>L’ascension jusqu’au sommet peut parfois sembler périlleuse. Organiser le processus de vente de son activité est la clé du succès pour convaincre votre futur reprenneur et réussir à vous démarquer des autres vendeurs</p>
              </div>
            </div>
            <div className="col-md-12 m-t-40 m-b-30 vmb-image-wrapper">
              <ReactWOW delay='0.5s' animation='fadeIn'>
                <img
                    src={require('../../static/images/section3/graph.png')}
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

export default Section3
