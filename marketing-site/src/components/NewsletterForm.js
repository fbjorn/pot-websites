import React from 'react'
import styled from 'styled-components'
import HubspotForm from 'react-hubspot-form'

// import { colors, device } from '../Theme.js'

const StyledForm = styled.article`

}
`;

const NewsletterForm = (props) => {
  return (
    <StyledForm> 
      
      <HubspotForm
        portalId='4568282'
        formId='0c04f084-c2f6-4fbd-8f58-1d55b988580b'
        onSubmit={() => console.log('Submit!')}
        onReady={(form) => console.log('Form ready!')}
        loading={<div>Loading...</div>}
        />

    </StyledForm> 
)}

export default NewsletterForm