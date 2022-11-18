import React from "react"
import { Box, Button, Heading, Layer, Stack, Text } from 'grommet';
import { Close } from 'grommet-icons';

import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function Modal({ feature, children }) {
  const image = getImage(feature.thumbnail.imageFile)
  const [showLayer, setShowLayer] = React.useState(false);

  return (
    <>
      <Box pad="small" fill align="center" justify="center" border={{ color: 'white', size: 'small' }}>
        <Button fill onClick={() => setShowLayer(true)}>
          <Stack anchor="bottom">
            <GatsbyImage image={image} alt="abc" />
            <Box pad={{ horizontal: 'xsmall' }} round>
              <Text size="small">{feature.title}</Text>
            </Box>
          </Stack>
        </Button>
        {showLayer && (
          <Layer full animation="fadeIn">
            <Box flex={false} direction="row" justify="between">
              <Heading level={2} margin="none">
              </Heading>
              <Button icon={<Close />} onClick={() => setShowLayer(false)} />
            </Box>
            {children}
          </Layer>
        )}
      </Box>
    </>
  )
}

Modal.storyName = 'Full';

Modal.parameters = {
  chromatic: { disable: true },
};

Modal.args = {
  full: true,
};