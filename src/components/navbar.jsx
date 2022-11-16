import React from "react"
import { Anchor, Nav } from 'grommet';
import { Home } from 'grommet-icons';

export default function Navbar({ links }) {
  return (
    <Nav direction="row">
      <Anchor hoverIndicator ><Home color='brand' /> </Anchor>
    </Nav>
  )
}