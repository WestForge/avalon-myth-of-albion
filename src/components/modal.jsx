import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Section({ feature, children }) {
  console.log(feature)

  // const image = getImage(feature.feature.imageFile)

  return (
    <>
      <label htmlFor={feature.slug} className="btn">{feature.title}</label>
      <input type="checkbox" id={feature.slug} className="modal-toggle" />
      <div className="modal z-50 hover:z-50">
        <div className="modal-box relative min-h-screen min-w-full">
        <label htmlFor={feature.slug} className="btn btn-sm absolute right-2 top-2">✕</label>
          {children}
        </div>
      </div>
    </>
  )
}