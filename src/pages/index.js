import * as React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Gallery from '../components/gallery'
import Stories from '../components/stories'
import Events from '../components/events'
import Email from '../components/email'


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Gallery heading="Exhibitions"/>
    <Stories />
    <Events />
    <Email />
  </Layout>
)

export default IndexPage
