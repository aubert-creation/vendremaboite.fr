import React, { useState } from 'react'
import ReactWOW from 'react-wow'
import * as Icon from 'react-feather';

import '../../static/styles/section7.scss';

const Section7 = (props) => {
    const [contact, setContact] = useState(false)
    const [phone, setPhone] = useState('')
    const [success, setSuccess] = useState(false)

    const onSubmit = () => {
      const data = {phone: phone};

      fetch('/api/contact', {
          method: 'post',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      }).then(res => {
          setContact(false)
          setPhone('')
          setSuccess(true)
      });
    }

    return (
      <section className="section7">
        <div className="vmb-wrapper">
          <div className="vmb-body">
            <div className="vmb-title-icon">
              <img
                src={require("../../static/images/section7/icon.png")}
                alt="icon discussion"
                className="vmb-icon"
              />
            </div>
            <div className="vmb-title">
              <h1>Lancez-vous</h1>
            </div>
            <div className="vmb-contact-container">
              <ReactWOW delay='0.4s' animation='fadeInDown'>
                <img
                  src={require("../../static/images/section7/bulle.png")}
                  alt="bulle de conversation"
                  className="vmb-contact-bulle-image"
                />
              </ReactWOW>
              <div className="vmb-contact-bulle-text">
                Laissez-nous votre numéro de téléphone et nous vous contacterons pour une première prise de contact
              </div>
            </div>
            {success &&
              <div className="vmb-contact-button-success">Numéro envoyé avec succès</div>
            }
            {!success &&
              <div className={`vmb-contact-button-container ${contact ? 'vmb-contact-button-on' : '' } `}>
                <div className="vmb-contact-button-numero">
                  <div className="form-group">
                      <input
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="Votre n° de téléphone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                      />
                  </div>
                </div>
                <div className='vmb-contact-button'>
                  <div className="vmb-contact-button-activate" onClick={() => setContact(true)}>
                    > Rencontrons-nous
                  </div>

                  <div className="vmb-contact-button-submit" onClick={() => {onSubmit()}}>
                    Envoyez
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </section>
    )
}

export default Section7
