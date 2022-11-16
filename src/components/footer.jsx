import React from "react"
import { Link } from "gatsby"

import { Grommet as GrommetIcon } from 'grommet-icons';
import { Box, Footer as GrommetFooter, Text } from 'grommet';

export default function Footer() {

  return (
    <GrommetFooter pad="large">
      <Box direction="row-responsive" gap="xsmall">
        <Box align="center" gap="small">
          <GrommetIcon color="brand" size="large" />
          <Text alignSelf="center" color="brand" weight="bold">
            West Forge Ltd
          </Text>
        </Box>
      </Box>
      <Box>
        <Box gap="medium">
          <Link to="/terms-of-service">
            <Text>Terms of Service</Text>
          </Link>
        </Box>
        <Box gap="medium">
          <Link to="/cookie-policy">
            <Text>Cookie Policy</Text>
          </Link>
        </Box>
        <Box gap="medium">
          <Link to="/privacy-policy">
            <Text>Privacy Policy</Text>
          </Link>
        </Box>
        <Box gap="medium">
          <Link to="/support">
            <Text>Support</Text>
          </Link>
        </Box>
      </Box>
    </GrommetFooter>
  )
}