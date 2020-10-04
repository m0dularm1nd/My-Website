import React, { Component, lazy, Suspense } from "react"
import { Link } from "gatsby"

import Indexx from "../components/indexx.js"

import SEO from "../components/seo"

const Land = lazy(() => import("./Land.js"))

const Indexpage = () => (
  <Indexx>
    <SEO title="Loading" />
    <Suspense
      fallback={
        <div className="page">
          <div className="pageGroup">
            <h1>Loading,,</h1>
            <p>pls wait</p>
          </div>
        </div>
      }
    >
      <Land></Land>
    </Suspense>
  </Indexx>
)

export default Indexpage
