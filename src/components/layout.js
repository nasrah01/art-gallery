import * as React from "react"
import Header from "./header"
import { GlobalStyle } from "./styles/globalStyles"

const Layout = ({ children }) => {

  return (
    <div>
      <GlobalStyle />
      <Header />
        <main>{children}</main>
    </div>
  )
}

export default Layout
