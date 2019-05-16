import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import { variables, colors } from '../Theme.js'

const StyledPricingCards = styled.div`
@media (max-width: 992px) {
  background: red;
}
`

const PricingCards = () => (
  <StyledPricingCards className="PricingCards">
    <h3>pricingcards</h3>
  </StyledPricingCards>
)

export default PricingCards