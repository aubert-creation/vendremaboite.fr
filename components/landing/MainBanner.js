import React from 'react'
import Link from 'next/link'
import ReactWOW from 'react-wow'
import TextLoop from "react-text-loop";

const MainBanner = () => {
  return (
    <div className="main-banner">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6">
                <div className="hero-content">
                  <div className="hero-content-title">
                    <h1>
                      Vendre{" "}
                      <TextLoop interval={3000}>
                        <span>sa boite</span>
                        <span>son entreprise</span>
                        <span>son commerce</span>
                        <span>son local</span>
                        <span>son business</span>
                      </TextLoop>
                    </h1>
                  </div>
                  <h3>n'aura jamais été aussi simple et rapide</h3>
                  <span>Proche de vous | Sur mesure</span>
                </div>
              </div>

              <div className="col-lg-5 offset-lg-1">
                <div className="main-illustration">
                  <ReactWOW delay='0.5s' animation='fadeInDown'>
                    <img
                        src={require('../../static/images/banner-illustration/illustration.png')}
                        className="wow fadeInDown"
                        data-wow-delay="0.6s"
                        alt="man"
                    />
                  </ReactWOW>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
