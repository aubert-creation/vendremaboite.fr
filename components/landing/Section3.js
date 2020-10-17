import React from 'react'
import ReactWOW from 'react-wow'
import * as Icon from 'react-feather';

import '../../static/styles/section3.scss';

const Section3 = (props) => {
    const steps = [{
      description: <span><b>Nous construisons ensemble votre dossier</b> (administratif, financier, juridique)</span>,
      bubble: 'bubble'
    },{
      description: <span><b>Nous apportons notre expertise pour la valorisation</b> et le diagnostique de votre entreprise</span>,
      bubble: 'bubble-short'
    },{
      description: <span><b>Nous recherchons en toute discretion LE bon acquereur</b></span>,
      bubble: 'bubble'
    },{
      description: <span><b>Nous finalisons le processus de vente</b> et nous vous apportons <b>les conseils</b> pour la suite...</span>,
      bubble: 'bubble-inv'
    }]
    return (
      <section className="section3">
        <div className="container">
          <div className="row m-t-40">
            <div className="col-md-12 m-t-60 m-b-30">
              <div className="col-md-8"><h2>Réussir <span>avec succès</span> toutes les étapes qui composent une vente</h2></div>
              <div className="col-md-6 m-b-60 m-t-20">
                <p>La concrétisation de votre projet peut parfois sembler périlleuse. L’anticipation et l’organisation du processus de vente de son activité sont les clés du succès pour trouver et convaincre votre futur repreneur en vous démarquant des autres vendeurs.</p>
              </div>
            </div>
            <div className="col-md-12 m-t-40 m-b-30 vmb-image-wrapper">
              <ReactWOW delay='0.5s' animation='fadeIn'>
                <img
                    src={require('../../static/images/section3/graph.png')}
                    className="vmb-image"
                    alt="man"
                />
              </ReactWOW>
              {steps.map((step, index) => {
                return (
                  <div className={`vmb-step vmb-step${index+1}`}>
                    <div className="vmb-step-info">
                      <div className="vmb-step-title">
                        Etape {index+1}
                      </div>
                      <div className="vmb-step-desc">
                        {step.description}
                      </div>
                    </div>

                    <div className="vmb-bubble-wrapper">
                      <div className="vmb-bubble">
                        <img src={require(`../../static/images/section3/${step.bubble}.png`)}/>
                      </div>
                      <div className="vmb-buble-icon">
                        <img src={require(`../../static/images/section3/step${index+1}.png`)}/>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
}

export default Section3
