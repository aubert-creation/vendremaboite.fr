import React from 'react'
import dynamic from 'next/dynamic'
import Drift from "react-driftjs";
import { Preloader, Placeholder } from 'react-preloading-screen';
import NoSSR from 'react-no-ssr';
import Header from '../components/Layouts/Header'
import MainBanner from '../components/landing/MainBanner'
import Section1 from '../components/landing/Section1';
import Section2 from '../components/landing/Section2';
import Section3 from '../components/landing/Section3';
import Section4 from '../components/landing/Section4';
import Section5 from '../components/landing/Section5';
import Section6 from '../components/landing/Section6';
import Section7 from '../components/landing/Section7';
import Footer from '../components/Layouts/Footer';
import GoTop from '../components/Layouts/GoTop';

const isServer = typeof window === 'undefined'
if (!isServer) {
  require("current-device")
}

class Index extends React.Component {
    render() {
        return (
            <NoSSR>
                <Preloader>
                    <Placeholder>
                      <div className="preloader">
                        <img className="spinner" src={require("../static/images/logo-splash.png")} alt="logo" />
                      </div>
                    </Placeholder>
                    <Drift appId="5vt8xbk9xm64" />
                    {/*<Header />*/}
                    <MainBanner />
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                    <Section6 />
                    <Section7 />
                    <Footer />
                    {/*<GoTop scrollStepInPx="50" delayInMs="16.66" />*/}
                </Preloader>
            </NoSSR>
        )
    }
}

export default Index
