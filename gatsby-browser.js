const React = require("react")
// setting default makes the error go away. why? :/
const Layout = require("./src/layouts/layout").default

exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}