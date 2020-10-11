import React from 'react'
import ReactWOW from 'react-wow'
import * as Icon from 'react-feather';

import '../../static/styles/section4.scss';

const Section4 = (props) => {
    return (
      <section className="section4">
        <div className="vmb-title">
          <h3>4 champs d’action, pour un suivis</h3>
          <h2>clés en main</h2>
        </div>
        <div className="vmb-wrapper">
          <div className="vmb-line">
            <div
              className="vmb-cell"
              style={{
                backgroundImage: 'url(../../static/images/section4/img1.jpg)',
                borderBottom: '1px solid #fff',
                borderRight: '1px solid #fff'
              }}
            >
              <div className="vmb-cell-title">
                <div className="vmb-cell-title-icon"><span>+</span></div>
                <div className="vmb-cell-title-text">ADMINISTRATIF</div>
              </div>
            </div>
            <div
              className="vmb-cell"
              style={{
                backgroundImage: 'url(../../static/images/section4/img2.jpg)',
                borderLeft: '1px solid #fff',
                borderBottom: '1px solid #fff'
              }}
            >
              <div className="vmb-cell-title">
                <div className="vmb-cell-title-icon"><span>+</span></div>
                <div className="vmb-cell-title-text">FINANCIER</div>
              </div>
              <div className="vmb-cell-hidden">
                <img
                  src={require("../../static/images/section4/icon.png")}
                  alt="icon vendremaboite"
                />
                <div className="vmb-cell-hidden-title">FINANCIER</div>
                <div className="vmb-cell-hidden-text">
                  Le montage du dossier financier peut être complexe varie souvent selon les aptitudent de chaque vendeur. Notre rôle est de nous adapter à vos aptitudes et vous fournir un conseil sur mesure. Nous examinons tous les éléments financiers de la société, y compris les actifs et passifs, les dettes et créances, ainsi que les en cours clients et fournisseurs.
                </div>
              </div>
            </div>
          </div>
          <div className="vmb-line">
            <div
              className="vmb-cell"
              style={{
                backgroundImage: 'url(../../static/images/section4/img3.jpg)',
                borderRight: '1px solid #fff',
                borderTop: '1px solid #fff'
              }}
            >
              <div className="vmb-cell-title">
                <div className="vmb-cell-title-icon"><span>+</span></div>
                <div className="vmb-cell-title-text">JURIDIQUE</div>
              </div>
            </div>
            <div
              className="vmb-cell"
              style={{
                backgroundImage: 'url(../../static/images/section4/img4.jpg)',
                borderTop: '1px solid #fff',
                borderLeft: '1px solid #fff'
              }}
            >
              <div className="vmb-cell-title">
                <div className="vmb-cell-title-icon"><span>+</span></div>
                <div className="vmb-cell-title-text">VALORISATION</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Section4
