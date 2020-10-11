import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/404.css"
import Wave from "../components/Wave.js"
import { Fade } from "react-awesome-reveal";
import upcoming from '../images/virgil.svg';



const Gallery = () => (
  <Layout>
    <SEO title="Gallery" />
    <div className="page">
      <div className="pageGroup">
      <Fade>
        <h1>Upcoming</h1>
          <p>What was beyond the bend in the stream was unknown,</p>
        </Fade>
        <img src={upcoming} alt="React Logo" />
      </div>
      <Wave />
    </div>
  </Layout>
)

export default Gallery