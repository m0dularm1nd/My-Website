import React from "react"
import styled from "styled-components"
import Wave from "./Wave.js"

import { Fade } from "react-awesome-reveal"

const SectionGroup = styled.div`
  background: url(${props => props.image});
  height: 850px;
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-rows: 350px auto;
  grid-gap: 20px;
  position: relative;
`
const SectionLogo = styled.img`
  align-self: end;
  width: 150px;
  margin: 0 auto;
`
const SectionTitleGroup = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 300px auto;
  grid-template-rows: auto 100%;
  margin: 0 50px;
  justify-self: center;
  vertical-align: middle;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-gap: 5px;
  }
`
const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0 auto;
  line-height: 1.2;
  background: linear-gradient(104deg, white 0%, #70a893 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 720px) {
    font-size: 45px;
  }
`
const SectionText = styled.p`
  color: white;
  white-space: pre-wrap;
`
const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`

const Section = props => (
  <SectionGroup image={props.image}>
    <WaveBottom>
      <Wave></Wave>
    </WaveBottom>
    <WaveTop>
      <Wave></Wave>
    </WaveTop>

    <SectionLogo src={props.logo} />

    <SectionTitleGroup>
      <Fade>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionText>{props.text}</SectionText>
      </Fade>
    </SectionTitleGroup>
  </SectionGroup>
)
export default Section
