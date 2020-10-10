import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/404.css"
import Wave from "../components/Wave.js"



const Gallery = () => (
  <Layout>
    <SEO title="Gallery" />
    <div className="page">
    <div className="pageGroup">
        <h1>Gallery</h1>
      </div>
      <Wave />
    </div>
  </Layout>
)

export default Gallery