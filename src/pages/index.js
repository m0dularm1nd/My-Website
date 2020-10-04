import React, { lazy, Suspense } from "react"

import Indexx from "../components/indexx.js"

import SEO from "../components/seo"

const Land = lazy(() => import("./Land.js"))

const Indexpage = () => (
  <Indexx>
    <SEO title="Loading" />
    <Suspense fallback={<div className="page">LOAD</div>}>
      <Land></Land>
    </Suspense>
  </Indexx>
)

export default Indexpage
