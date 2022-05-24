import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/Banner'
import Accordion from '../../components/Accordion'

const AccordionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
`

const About = () => {
  return (
    <React.Fragment>
      <Banner />
      <AccordionsWrapper>
        <Accordion />
      </AccordionsWrapper>
    </React.Fragment>
  )
}
export default About
