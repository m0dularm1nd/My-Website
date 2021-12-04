import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Card from "../components/Card"
import Section from "../components/Section.js"
import Wave from "../components/Wave.js"
import StaticData from "../../StaticData.json"
import Cell from "../components/Cell.js"
import uuid from "react-uuid"
import { Zoom, Slide } from "react-awesome-reveal"

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}


const Land = () => (
  <Layout>
    <SEO title="Home" />
    <ScrollToTopOnMount />
    <div className="HOME">
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Welcome to MindScape</h1>
          <p>Observer of the Phenomenon</p>
          <Link to="/gallery">More Info</Link> <br />
          {/* <div className="logos"> */}
          {/*   <img */}
          {/*     src={require("../images/logo-xcode.png")} */}
          {/*     width="50" */}
          {/*     alt="test" */}
          {/*   /> */}
          {/*   <img */}
          {/*     src={require("../images/logo-figma.png")} */}
          {/*     width="50" */}
          {/*     alt="test" */}
          {/*   /> */}
          {/*   <img */}
          {/*     src={require("../images/logo-swift.png")} */}
          {/*     width="50" */}
          {/*     alt="test" */}
          {/*   /> */}
          {/*   <img */}
          {/*     src={require("../images/logo-react.png")} */}
          {/*     width="50" */}
          {/*     alt="test" */}
          {/*   /> */}
          {/*   <img */}
          {/*     src={require("../images/logo-sketch.png")} */}
          {/*     width="50" */}
          {/*     alt="test" */}
          {/*   /> */}
          {/*   <img */}
          {/*     src={require("../images/logo-gatsby.png")} */}
          {/*     width="50" */}
          {/*     alt="test" */}
          {/*   /> */}
          {/* </div> */}
          <Wave />
          <div id="cards"></div>
        </div>
      </div>
      <div className="Cards">
        <h2>
          Discover,<br></br> The WaveStore
        </h2>
        <Zoom >
          <div className="CardGroup">
            <Card
              title="Add"
              text="Read More"
              text2={``}
              image={require("../images/card2.png")}
            />
            <Card
              title="Dynamic"
              text="Read More"
              text2={``}
              image={require("../images/card6.png")}
            />
            <Card
              title="Components"
              text="Read More"
              text2={``}
              image={require("../images/card7.png")}
            />
          </div>
        </Zoom>
      </div>
      <div id="info">
        <Section
          image={require("../images/card5.png")}
          logo={require("../images/gif.gif")}
          title="Greatness Ahead,"
          text={`Component based Layout built using CSS grids and styled compenents from scratch.
What was beyond the bend in the stream was unknown,`}
        />
      </div>
      <div id="store">
        <SectionCaption>Features and Tech</SectionCaption>
        <SectionContentGroup>
          {StaticData.cells.map(cell => (
            <Slide key={uuid()} cascade direction="left" >
              <Cell title={cell.title} image={cell.image} />
            </Slide>
          ))}
        </SectionContentGroup>
      </div>
    </div>
  </Layout>
)

export default Land


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
