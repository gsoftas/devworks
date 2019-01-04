import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import TopNavigation from '../components/TopNavigation'
import Footer from '../components/footer'
import './layout.css'
import './style.css'

const ContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  color: white;
`

const siteQuery = graphql`
query SiteTitleQuery {
  site {
    siteMetadata {
      title
      description
      keywords
    }
  }
}
`
const Layout = ({ children }) => (
  <StaticQuery
    query={siteQuery}
    render={data => (
      <div className="site-wrapper">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content:  data.site.siteMetadata.description},
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        >
          <html lang="en" class="page-css"/>
        </Helmet>
        {/* Main Website Structure */}
          <TopNavigation />
          <ContentWrapper>
            {children}
          </ContentWrapper>
          <Footer />
        </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
