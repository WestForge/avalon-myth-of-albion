import React from "react"
import { Attraction, Car, TreeOption, Cloud, Amazon } from 'grommet-icons'
import { Box, Carousel } from 'grommet'


export default function Feature({ feature }) {
  console.log(feature)
  return (
    <>
      <Box fill="true" align="center" gap="small" justify="center">
        <Carousel fill="true" wrap height="medium" width="medium">
          <Box fill align="center" justify="center" background="light-1">
            <Attraction size="xlarge" />
          </Box>
          <Box fill align="center" justify="center" background="black">
            <TreeOption size="xlarge" />
          </Box>
          <Box fill align="center" justify="center" background="light-3">
            <Car size="xlarge" />
          </Box>
          <Box fill align="center" justify="center" background="brand">
            <Cloud size="xlarge" />
          </Box>
          <Box fill align="center" justify="center">
            <Amazon size="xlarge" />
          </Box>
        </Carousel>
      </Box>
    </>
  )
}