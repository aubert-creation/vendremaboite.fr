import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'

import '../../static/styles/footer.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <footer
              className="footer-area"
              style={{
                backgroundImage: 'url(../../static/images/footer.png)',
              }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/logo.png")} alt="logo" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            {/*
                              <div className="single-footer-widget pl-5">
                                  <h3>Company</h3>
                                  <ul className="list">
                                      <li>
                                          <Link href="/about">
                                              <a>About Us</a>
                                          </Link>
                                      </li>
                                      <li>
                                          <Link href="/services">
                                              <a>Services</a>
                                          </Link>
                                      </li>
                                      <li>
                                          <Link href="/features">
                                              <a>Features</a>
                                          </Link>
                                      </li>
                                      <li>
                                          <Link href="/pricing">
                                              <a>Our Pricing</a>
                                          </Link>
                                      </li>
                                      <li>
                                          <Link href="/blog">
                                              <a>Latest News</a>
                                          </Link>
                                      </li>
                                  </ul>
                              </div>
                            */}
                        </div>

                        <div className="col-lg-3 col-md-6">
                          {/*
                            <div className="single-footer-widget">
                                  <h3>Support</h3>
                                  <ul className="list">
                                      <li>
                                          <Link href="#">
                                              <a>FAQ's</a>
                                          </Link>
                                      </li>
                                      <li>
                                          <Link href="#">
                                              <a>Privacy Policy</a>
                                          </Link>
                                      </li>
                                      <li>
                                          <Link href="#">
                                              <a>Terms & Condition</a>
                                          </Link>
                                      </li>
                                      <li>
                                          <Link href="#">
                                              <a>Community</a>
                                          </Link>
                                      </li>
                                      <li>
                                          <Link href="/contact">
                                              <a>Contact Us</a>
                                          </Link>
                                      </li>
                                  </ul>
                              </div>
                          */}
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Contact</h3>

                                <ul className="footer-contact-info">
                                    <li>
                                        <Icon.MapPin />
                                        142 rue Saint-Jean 14000 CAEN
                                    </li>
                                    <li>
                                        <Icon.Mail />
                                        <Link href="#"><a>hermann@vendremaboite.fr</a></Link>
                                    </li>
                                    <li>
                                        <Icon.PhoneCall />
                                        <Link href="#"><a>06 49 52 96 29</a></Link>
                                    </li>
                                </ul>
                                <ul className="social-links">
                                    <li>
                                        <Link href="https://www.facebook.com/hermann.nobilet">
                                            <a className="facebook">
                                                <Icon.Facebook />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.linkedin.com/in/hermann-nobilet-975149bb/">
                                            <a className="linkedin"><Icon.Linkedin /></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<img src={require("../../static/images/map.png")} className="map" alt="map" />*/}

            </footer>
        )
    }
}
