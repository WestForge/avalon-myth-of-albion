import React from "react"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

export default function CenterBanner({ page }) {
  const banner = getImage(page.background.imageFile)
  const bgImage = convertToBgImage(banner)

  return (
    <BackgroundImage Tag="section" {...bgImage}>
      <div className="hero min-h-screen">
        <div className="flex justify-center content-center">
          <div className="align-middle">
            <div className="flex justify-center">
              <h1 className="w-full py-6 text-black max-w-md text-center justify-center align-middle text-5xl">
                {page.name}
              </h1>
            </div>
            <div className="flex justify-center">
              <div className="w-full py-6 text-black max-w-md text-center justify-center align-middle glass">
                {page.description}
              </div>
            </div>
            <div className="flex justify-center">

            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}