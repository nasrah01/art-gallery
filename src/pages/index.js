import * as React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Gallery from '../components/gallery'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Gallery />
  </Layout>
)

export default IndexPage
