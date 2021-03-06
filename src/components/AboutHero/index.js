import React from 'react'
import about from '../../images/about.png'
import {
  Container,
  Img,
  Right,
  Heading,
  FirstParagraph,
  SecondParagraph,
} from './style'

const AboutHero = () => (
  <Container>
    <Img src={about} />
    <Right>
      <Heading>Dillon Morris</Heading>
      <FirstParagraph>
        I get to work on a team that makes digital products that help people. I
        am grateful for that privelege and strive to make the most of it.
      </FirstParagraph>
      <SecondParagraph>
        When I'm not coding & creating for the web I enjoy playing and writing
        music and staying physically active.
      </SecondParagraph>
    </Right>
  </Container>
)
export default AboutHero
