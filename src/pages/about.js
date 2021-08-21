import Layout from '../components/Layout'
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage = () => {
    return (
        <Layout pageTitle='About me'>
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        <StaticImage
        src='../images/coding.jpg'
        objectFit ='contain'
        alt='image'
        />
        </Layout>
    )
}

export default AboutPage
