import '../static/css/bootstrap.min.css';
import '../static/css/slick.css';
import '../static/css/animate.css';
import '../static/css/flaticon.css';
import '../static/styles/style.scss';
import '../static/styles/main-banner.scss';

// Change based on available styles like pink, brink-pink, purple then remove comment from below import & change based on available colors in static/styles folder
// import '../static/styles/purple-style.scss';
import '../static/styles/responsive.scss';

import { Provider } from 'react-redux';
import App, {Container} from 'next/app'
import { DefaultSeo } from "next-seo";
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/reducers/cartReducer';
import React from 'react';


export default withRedux(initStore)(
    class MyApp extends App {

        static async getInitialProps ({ Component, ctx }) {
            return {
                pageProps: Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {}
            }
        }

        render () {
            const { Component, pageProps, store } = this.props
            return (
              <Container>
                <DefaultSeo
                  title="vendremaboite.fr"
                  description="Vendre sa boite n'aura jamais été aussi simple et rapide."
                  openGraph={{
                    type: "website",
                    locale: "fr_FR",
                    url: "https://www.vendremaboite.fr/",
                    site_name:
                      "vendremaboite.fr"
                  }}
                />
                <Provider store={store}>
                  <Component {...pageProps} />
                </Provider>
              </Container>
            );
        }
    }
)
