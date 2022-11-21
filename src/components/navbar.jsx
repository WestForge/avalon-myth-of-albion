import React from "react"
import { Link } from "gatsby"

export default function Narbar({ page }) {
  return (
    <div className="navbar glass fixed top-0 z-10 text-black text-sm">
      <div className="flex-1 ">
        <Link className="btn btn-ghost normal-case" to="/">{page.name}</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">

        </ul>
      </div>
    </div>
  )
}