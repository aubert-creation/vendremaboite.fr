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
                backgroundImage: 'url(../../static/images/section4/img4.jpg)',
                borderBottom: '1px solid #fff',
                borderRight: '1px solid #fff'
              }}
            >
              <div className="vmb-cell-title">
                <div className="vmb-cell-title-icon"><span>+</span></div>
                <div className="vmb-cell-title-text">VALORISATION</div>
              </div>
              <div className="vmb-cell-hidden">
                <img
                  src={require("../../static/images/section4/icon.png")}
                  alt="icon vendremaboite"
                />
                <div className="vmb-cell-hidden-title">VALORISATION</div>
                <div className="vmb-cell-hidden-text">
                  Point clé du processus de vente, l’estimation est l’une des premières étapes, qui nécessite une forte implication du cédant et une bonne connaissance du marché actuel. Il est important de bien définir les motivations de vente, réaliser un état des lieux précis de l’activité et d’apporter un diagnostique fiable des forces et faiblesses de l’entreprise. Plusieurs méthodes existent, un accompagnement est préférable pour effectuer un diagnostique juste.
                </div>
              </div>
            </div>
            <div
              className="vmb-cell"
              style={{
                backgroundImage: 'url(../../static/images/section4/img3.jpg)',
                borderLeft: '1px solid #fff',
                borderBottom: '1px solid #fff'
              }}
            >
              <div className="vmb-cell-title">
                <div className="vmb-cell-title-icon"><span>+</span></div>
                <div className="vmb-cell-title-text">JURIDIQUE</div>
              </div>
              <div className="vmb-cell-hidden">
                <img
                  src={require("../../static/images/section4/icon.png")}
                  alt="icon vendremaboite"
                />
                <div className="vmb-cell-hidden-title">JURIDIQUE</div>
                <div className="vmb-cell-hidden-text">
                  La vente d’un fonds de commerce ou encore des parts d’une entreprise est un processus bien encadré par loi, pour protéger le vendeur et l’acheteur. Les obligations légales sont nombreuses et varient selon le type d’activité du cédant, ou encore du choix de cession. Notre rôle est de vous accompagner, de vous conseiller sur les démarches à remplir et de vous orienter vers le bon interlocuteur pour finaliser votre dossier avant et après la vente.
                </div>
              </div>
            </div>
          </div>
          <div className="vmb-line">
            <div
              className="vmb-cell"
              style={{
                backgroundImage: 'url(../../static/images/section4/img1.jpg)',
                borderTop: '1px solid #fff',
                borderRight: '1px solid #fff'
              }}
            >
              <div className="vmb-cell-title">
                <div className="vmb-cell-title-icon"><span>+</span></div>
                <div className="vmb-cell-title-text">AMINISTRATIF</div>
              </div>
              <div className="vmb-cell-hidden">
                <img
                  src={require("../../static/images/section4/icon.png")}
                  alt="icon vendremaboite"
                />
                <div className="vmb-cell-hidden-title">AMINISTRATIF</div>
                <div className="vmb-cell-hidden-text">
                  L’organisation est le maître mot pour ce terme qui en décourage plus d’un. Comme pour la création d’une entreprise, chaque étape de la vente se doit d’être rigoureusement suivie et sectorisée. Notre experience nous permet aujourd’hui d’apporter de nouveaux outils et de précieux conseils pour vous permettre d’adopter une méthodologie efficace dans la gestion administrative de la vente.
                </div>
              </div>
            </div>
            <div
              className="vmb-cell"
              style={{
                backgroundImage: 'url(../../static/images/section4/img2.jpg)',
                borderLeft: '1px solid #fff',
                borderTop: '1px solid #fff'
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
                  La dernière étape de la vente est la recherche de financement pour l’acquéreur, c’est souvent une crainte pour le vendeur car nous voyons le nombre de refus de crédits explosés. Nous mettons un point d’honneur à s’assurer d’une fine sélection des candidats et de leur capacité financière afin d’évite de faux espoirs au acteurs de la transaction. Si besoin nous activons notre réseau de partenaires financier et réalisons les démarches à votre place afin de faciliter l’acceptation de dossier de crédit
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Section4
