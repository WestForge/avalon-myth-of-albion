import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import { Box, Paragraph } from "grommet"

export default function Banner({ page, children }) {

  const banner = getImage(page.background.imageFile)
  const bgImage = convertToBgImage(banner)
  const image = getImage(page.logo.imageFile)

  return (
    <Box fill="true " style={{ height: "100vh" }}>
      <BackgroundImage Tag="bgimage" {...bgImage} style={{ height: "100%" }}>
        <Box fill align="center" pad="large" justify="center" >
          <GatsbyImage image={image} alt="" />
          <Paragraph>{page.description}</Paragraph>
          {children}
        </Box>
      </BackgroundImage>
    </Box>
  )
}