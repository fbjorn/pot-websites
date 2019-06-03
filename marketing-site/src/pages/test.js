import React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

class fooTest extends React.Component {
  
  render() {
    // const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMarkdownRemark.edges

    // const { currentPage, numPages } = this.props.pageContext
    // const isFirst = currentPage === 1
    // const isLast = currentPage === numPages
    // const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    // const nextPage = (currentPage + 1).toString()

    return (
      
    <span>fooTest</span>
      // <Layout location={this.props.location} title={siteTitle}>

      //   <SEO title="All posts" />
      //   {/* <Bio /> */}
      //   {posts.map(({ node }) => {
      //     const title = node.frontmatter.title || node.fields.slug
      //     return (
      //       <div key={node.fields.slug}>
      //         <h3
      //           style={{
      //             // marginBottom: rhythm(1 / 4),
      //           }}
      //         >
      //           <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
      //             {title} - {node.fields.slug} - {currentPage}
      //           </Link>
      //         </h3>
      //         <small>{node.frontmatter.date}</small>
      //         <p
      //           dangerouslySetInnerHTML={{
      //             __html: node.frontmatter.description || node.excerpt,
      //           }}
      //         />
      //       </div>
      //     )
      //   })}
      // </Layout>
    )
  }
}

export default fooTest

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             # description
//           }
//         }
//       }
//     }
//   }
// `