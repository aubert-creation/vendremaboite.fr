import React from 'react'
import Link from 'next/link'
import ReactWOW from 'react-wow'
import TextLoop from "react-text-loop";

const MainBanner = () => {
  return (
    <div className="main-banner">
      <div className="header-title">
        <Link href="/">
            <a
                className="navbar-brand"
                onClick={() => window.location.refresh()}
            >
                <img src={require("../../static/images/logo2.png")} alt="logo" />
                <span>vendremaboite.fr</span>
            </a>
        </Link>
      </div>
      <div className="main-body">
        <div className="main-content">
          <div className="hero-content">
            <div className="hero-content-title">
              <h1>
                <span className="pre-title">Vendre{" "}</span>
                <TextLoop interval={2500}>
                  <span className="opt-title">sa boite</span>
                  <span className="opt-title">son entreprise</span>
                  <span className="opt-title">son commerce</span>
                  <span className="opt-title">son local</span>
                  <span className="opt-title">son business</span>
                </TextLoop>
              </h1>
            </div>
            <h3>n'aura jamais été aussi simple</h3>
            <span className="sub-title">Proche de vous | Sur mesure</span>
          </div>
        </div>
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
        <div></div>
      </div>
    </div>
  )
}

export default MainBanner
