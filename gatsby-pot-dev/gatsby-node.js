/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)


exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
    return graphql(`{
        allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        ) {
        edges {
            node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
                date
                path
                title
                type
            }
            }
        }
        }
    }`)
        .then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }
    result.data.allMarkdownRemark.edges
            .forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: blogPostTemplate,
                context: {} // additional data can be passed via context
            });
            });
        });
}
