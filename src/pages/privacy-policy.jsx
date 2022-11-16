import React from "react"
import { graphql } from "gatsby"



import Layout from "../layouts/layout"
import Banner from "../components/banner"
import { Page, Button, Anchor } from 'grommet';

import Section from "../components/section"

const IndexPage = ({ data }) => {
  const page = data.directus.page;
  console.log(page)
  return (
    <Layout>
      <Page kind="narrow">
        Privacy
      </Page>
    </Layout>
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