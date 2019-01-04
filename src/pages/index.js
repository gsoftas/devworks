import React from 'react'
import Layout from '../components/layout'
import Hero from '../ui-elements/Hero'
import Paragraph from '../ui-elements/Paragraph';
import DevWorksLogo from "../images/DevWorks-logo.png"

const IndexPage = () => (
  <Layout>
    <Hero>
      <img src={DevWorksLogo} alt="Dev Works Logo"/>
      <br />
      <Paragraph>
        We are a tiny creative and software development studio, specializing in interesting and innovative projects, that make a big difference
      </Paragraph>
    </Hero>
  </Layout>
)

export default IndexPage
