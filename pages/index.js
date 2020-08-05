import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen';
import NoSSR from 'react-no-ssr';
import Header from '../components/Layouts/Header'
import MainBanner from '../components/landing/MainBanner'
import Section1 from '../components/landing/Section1';
import Section2 from '../components/landing/Section2';
import Section3 from '../components/landing/Section3';
import Section4 from '../components/landing/Section4';
import Section5 from '../components/landing/Section5';
import Footer from '../components/Layouts/Footer';
import GoTop from '../components/Layouts/GoTop';

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
                    <Header />
                    <MainBanner />
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                    <Footer />
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />
                </Preloader>
            </NoSSR>
        )
    }
}

export default Index
