import * as React from "react"
import Header from "./header"
import { GlobalStyle } from "./styles/globalStyles"
import Footer from './footer'

const Layout = ({ children }) => {

  return (
    <div>
      <GlobalStyle />
      <Header />
        <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
