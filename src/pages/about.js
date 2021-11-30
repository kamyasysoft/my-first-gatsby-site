import * as React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage = () => {
    return(
        <Layout pageTitle="About Us Page">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/icon.png"
            />
        </Layout>
    )
}

export default AboutPage;