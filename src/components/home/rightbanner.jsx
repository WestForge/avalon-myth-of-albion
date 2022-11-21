import React from "react"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

export default function RightBanner({ page, children }) {
  const banner = getImage(page.background.imageFile)
  const bgImage = convertToBgImage(banner)

  return (
    <BackgroundImage Tag="section" {...bgImage} >
      <div className="min-h-screen flex flex-row items-center p-5 justify-end">
        <div className="flex flex-row items-center">
          <div className="flex flex-col glass p-5">
            <div className="flex justify-center">
              <h1 className="w-full py-6 text-black max-w-md text-center justify-center align-middle text-5xl">
                {page.name}
              </h1>
            </div>
            <div className="flex justify-center">
              <div className="w-full py-6 text-black max-w-md text-center justify-center align-middle">
                {page.description}
              </div>
            </div>
            <div className="flex justify-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}