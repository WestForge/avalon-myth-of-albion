import React from "react"
import { graphql } from "gatsby"

import Banner from "../components/banner"
import { Box, Button, Anchor } from 'grommet';

import Section from "../components/section"

const IndexPage = ({ data }) => {
  const page = data.directus.page;
  return (
    <>
      <Banner page={page}>
        {page.sections.map(function (section) {
          const link = "#" + section.slug
          return (
            <Anchor href={link}>
              <Button>{section.title}</Button>
            </Anchor>
          );
        })}
      </Banner>
      <Box kind="narrow">
        {page.sections.map(function (section) {
          return (
            <div id={section.slug} key={section.slug}>
              <Section section={section} />
            </div>
          );
        })}
      </Box>
    </>
  )
}

export const query = graphql`
  query {
    directus {
      page: page_by_id(id: "1") {
        logo {
          id
          imageFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: NONE
                width: 320
                layout: FIXED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
        background {
          id
          imageFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: NONE
                width: 1920
                layout: FULL_WIDTH
                formats: [AUTO, WEBP]
              )
            }
          }
        }
        sections(sort: ["weight"]) {
          id
          background {
            id
            imageFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: NONE
                  width: 1920
                  layout: FULL_WIDTH
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
          slug
          title
          description
          features(sort: ["weight"]) {
            slug
            title
            description
            thumbnail {
              id
              imageFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: NONE
                    width: 1920
                    layout: FULL_WIDTH
                    formats: [AUTO, WEBP]
                  )
                }
              }
            }
            slides {
              key
              image {
                id
                imageFile {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: NONE
                      width: 1920
                      layout: FULL_WIDTH
                      formats: [AUTO, WEBP]
                    )
                  }
                }
              }
            }
          }
        }
        description
        name
        title
        slug
      }
    }
  }
`

export default IndexPage