import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'
import { CheckIcon } from '@chakra-ui/icons';
import {
  Flex,
  Text,
  useBreakpointValue,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const IndexPage = ({ data }) => { 
  const home = data.directus.home
  const features = data.directus.features
  const links = data.directus.links
  const image = getImage(data.directus.home.logo.imageFile)
  const banner = getImage(data.directus.home.banner.imageFile)
  const bgImage = convertToBgImage(banner)
  const icon = getImage(data.directus.icon.logo.imageFile)


  return (
    <>
      <NavBar links={links} icon={icon} />
      <BackgroundImage Tag="section" {...bgImage} preserveStackingContext>
        <Flex w={'full'} h={'100vh'}>
          <VStack w={'full'} justify={'center'} px={useBreakpointValue({ base: 4, md: 8 })} bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
            <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
              <GatsbyImage image={image} alt="" />
            </Stack>
          </VStack>
        </Flex>
      </BackgroundImage>
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>{home.title}</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            {home.content}
          </Text>
        </Stack>

        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature.slug} align={'top'}>
                <Box px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text>{feature.brief}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export const data = graphql`
  query {
    directus {
      icon: Page_by_id(id: "1") {
        logo {
          id
          imageFile {					
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 80, layout: FIXED, formats: [AUTO, WEBP])
              }
            }
        }
      }
      links: Page(filter: {header: {_eq: true}}, sort: ["sort", "date_created"]) {
        menu
        slug
        id
      }
      features: Page(filter: {feature: {_eq: true}}) {
        id
        title
        brief
        slug
      }
      home: Page_by_id(id: 1 ) {
        title
        content
        slug
        sections {
          related_Page_id {
            slug
            brief
            title
            banner {
              id
              imageFile {
                childImageSharp {
                  gatsbyImageData(placeholder: DOMINANT_COLOR, width: 1080, layout: CONSTRAINED, formats: [AUTO, WEBP])
                }
              }
            }
          }
        }
        banner {
          id
          imageFile {					
						childImageSharp {
							gatsbyImageData(placeholder: DOMINANT_COLOR, width: 1080, layout: CONSTRAINED, formats: [AUTO, WEBP])
						}
					}
        }
        logo {
          id
          imageFile {					
						childImageSharp {
							gatsbyImageData(placeholder: BLURRED, width: 400, layout: FIXED, formats: [AUTO, WEBP])
						}
					}
        }
      }
    }
  }
`

export default IndexPage