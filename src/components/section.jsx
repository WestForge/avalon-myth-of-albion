import React from "react"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import { Main, Box, PageContent, Heading, Paragraph, Grid } from 'grommet';

import Feature from "../components/feature"
import Modal from '../components/modal'

export default function Section({ section }) {
  const banner = getImage(section.background.imageFile)
  const bgImage = convertToBgImage(banner)

  return (
    <Main fill="vertical" style={{ height: "100vh" }}>
      <BackgroundImage Tag="bgimage" {...bgImage} style={{ height: "100%" }}>
        <PageContent fill justify="center" >
          <Box>
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
        </PageContent>

      </BackgroundImage>
    </Main>

  )
}