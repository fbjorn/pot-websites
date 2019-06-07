import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import NewsletterForm from '../components/NewsletterForm'

import { colors, device, variables } from '../Theme.js'

const StyledPage = styled.div`
  &&& { max-width: ${ variables.pageWidth } 
  width: auto;
  min-height: 75vh;
  margin: 0 auto;
  @media ${ device.laptop } {
  }
  * { color: white }
`
const StyledSection = styled.article`
  &&& { max-width: ${ variables.pageWidth } }
  margin: 5rem auto;
  padding: 10%;
  background: ${ colors.mainDarker }
`

const Newsletter = () => (
  <Layout>
    <SEO title="Platform of Trust Contact information" />
    <svg height="0" width="0" viewBox="0 0 500 500" >
      <defs>
          <clipPath id="hex-clip" clipPathUnits="objectBoundingBox">
            <polygon fill="none" points="0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0 0.25" />
          </clipPath>
      </defs>
    </svg>
    <StyledPage>
      <StyledSection>
        <NewsletterForm />
      </StyledSection>
    </StyledPage>
  </Layout>
)

export default Newsletter
