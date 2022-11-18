import React from "react"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import { Grid, Box, PageContent, Heading, Paragraph } from 'grommet';

import Feature from "../components/feature"
import Modal from '../components/modal'

export default function Section({ section, id, key }) {
  const banner = getImage(section.background.imageFile)
  const bgImage = convertToBgImage(banner)

  return (
    <Box id={id} key={key} fill="vertical" style={{ height: "100vh" }}>
      <BackgroundImage Tag="bgimage" {...bgImage} style={{ height: "100%" }}>
        <Grid columns={{ count: 3, size: 'auto', }} gap="small"  fill >

          <Box fill justify="center" >
            <Box align="center">
              <Heading level={2}>{section.title}</Heading>
              <Paragraph>
                {section.description}
              </Paragraph>
            </Box>
            <Grid rows="small" columns={{ count: 'fit', size: 'small' }} gap="small">
              {section.features.map(function (feature) {
                return (
                  <Modal feature={feature} >
                    <Feature feature={feature} />
                  </Modal>
                );
              })}
            </Grid>
          </Box>
          <Box />
          <Box />
        </Grid>
      </BackgroundImage>
    </Box>

  )
}