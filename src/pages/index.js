import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section.js"
import Wave from "../components/Wave.js"
import StaticData from "../../StaticData.json"
import Cell from "../components/Cell.js"

const SectionCaption = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #94a4ba;
  text-align: center;
`
const SectionContentGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  padding: 0 30px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Welcome to MindScape</h1>
        <p>Observer of the Phenomenon</p>
        <Link to="#">More Info...</Link> <br />
        <div className="logos">
          <img
            src={require("../images/logo-xcode.png")}
            width="50"
            alt="test"
          />
          <img
            src={require("../images/logo-figma.png")}
            width="50"
            alt="test"
          />
          <img
            src={require("../images/logo-swift.png")}
            width="50"
            alt="test"
          />
          <img
            src={require("../images/logo-react.png")}
            width="50"
            alt="test"
          />
          <img
            src={require("../images/logo-sketch.png")}
            width="50"
            alt="test"
          />
          <img
            src={require("../images/logo-gatsby.png")}
            width="50"
            alt="test"
          />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>
        Discover,<br></br> The WaveStore
      </h2>
      <div className="CardGroup">
        <Card
          title="First Wave"
          text="10$"
          image={require("../images/card2.png")}
        />
        <Card
          title="Sec Wave"
          text="20$"
          image={require("../images/card5.png")}
        />
        <Card
          title="Third Wave"
          text="30$"
          image={require("../images/card3.png")}
        />
      </div>
    </div>
    <Section
      image={require("../images/section1.png")}
      logo={require("../images/logo-react.png")}
      title="New Project"
      text="What was beyond the bend in the stream was unknown."
    />
    <SectionCaption>Many Features and more</SectionCaption>
    <SectionContentGroup>
      {StaticData.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionContentGroup>
  </Layout>
)

export default IndexPage
