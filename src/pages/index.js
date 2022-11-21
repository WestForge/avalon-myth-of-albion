import React from "react"
import { graphql } from "gatsby"


import NavBar from "../components/navbar"
import Footer from "../components/footer"
import CenterBanner from "../components/home/centerbanner"
import LeftBanner from "../components/home/leftbanner"
import RightBanner from "../components/home/rightbanner"

const IndexPage = ({ data }) => {
  console.log(data)

  const page = data.directus.page;
  const lore = data.directus.lore;
  const manual = data.directus.manual;

  return (
    <>
      <NavBar page={page} />

      <CenterBanner page={page} />
      <LeftBanner page={lore}>

      </LeftBanner>

      <RightBanner page={manual}>

      </RightBanner>

      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    directus {
      news(limit: 3, sort: ["-date_created"]) {
        date_created
        date_updated
        slug
        title
      }
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
        description
        name
        title
        slug
      }
      links {
        name
        link
      }
      manual: page_by_id(id: "10") {
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
        description
        name
        title
        slug
      }
      lore: page_by_id(id: "11") {
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
        description
        name
        title
        slug
      }
    }
  }
`


export default IndexPage