import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
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
const StyledPad = styled.div`
  margin: 1rem;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="Platform of Trust 404: Not found" />
    <StyledPage>
      <StyledPad>
        <StyledSection>
          <h1>Oh no, you must’ve broken the internet! </h1>
          <p>Or maybe the page you were searching is just missing… either way, apologies – please remain calm and do carry on.</p> 
          
          <p>Please notify us if you think there’s a clitch on our site: <a href="mailto:email@oftrust.net">email@oftrust.net</a>
          </p>
        </StyledSection>
      </StyledPad>
    </StyledPage>
  </Layout>
)

export default NotFoundPage
