import React from "react"
import ContactSection from "../components/contact"
import Footer from "../components/footer"
import Header from "./header"
import ScrollTop from "./scrollbutton"

const Layout = ({ children }) => {
  return (
    <div className="top">
      <Header />
      <div className="linear">{children}</div>
      <Footer />
      <ScrollTop />
      <ContactSection />
    </div>
  )
}

export default Layout
