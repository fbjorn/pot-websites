import React from "react"
import { graphql } from "gatsby"

// const Test = () => (
//       <h1>TEST</h1>
// )

// export default Test

export default ({ data }) => {
  console.log(data)
  return (
    <section>
        <h1>WordPress Blog</h1>
        <h4>Posts from katalysti.fi :-) </h4>
        {data.allWordpressPost.edges.map(({ node }) => (
            <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                    <h3>{node.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    <div dangerouslySetInnerHTML={{ __html: node.content }} />
                </div>
            </div>
      ))}
    </section>
  )
}

export const pageQuery = graphql`
query {
    allWordpressPost {
        edges {
            node {
                id
                title
                excerpt
                content
            }
        }
    }
}
`