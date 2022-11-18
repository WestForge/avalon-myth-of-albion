import React from "react"

import Footer from "../components/footer"

import { Grommet } from "grommet"
import { base, dark, grommet } from 'grommet/themes';


export default function Layout({ children }) {
  return (
    <Grommet theme={dark} full >
      {children}
      <Footer />
    </Grommet>
  )
}