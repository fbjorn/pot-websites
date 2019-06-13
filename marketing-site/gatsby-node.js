/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve(`src/templates/blog-template.js`);
    const newsTemplate = path.resolve(`src/templates/news-template.js`);
    const caseTemplate = path.resolve(`src/templates/case-template.js`);
    const eventTemplate = path.resolve(`src/templates/event-template.js`);
    const pageTemplate = path.resolve(`src/templates/page-template.js`);
    const pricingTemplate = path.resolve(`src/templates/pricing-template.js`);
    return graphql(`
    {
        blogs: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "blog" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    html
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        type
                        author
                        pic
                        pictext
                        subtype
                    }
                }
            }
        }
        events: allMdx(
            filter: { frontmatter: { type: { eq: "event" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        type
                        author
                        pic
                        pictext
                        subtype
                    }
                }
            }
        }
        news: allMdx(
            filter: { frontmatter: { type: { eq: "news" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        type
                        author
                        authorpic
                        pic
                        pictext
                        subtype
                    }
                }
            }
        }
        cases: allMdx(
            filter: { frontmatter: { type: { eq: "case" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        type
                        author
                        pic
                        pictext
                        subtype
                    }
                }
            }
        }
        pages: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "page" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    html
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        type
                    }
                }
            }
        }
        
        pricing: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "pricing" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    html
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        type
                    }
                }
            }
        }
    }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }
        
        result.data.blogs.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: blogTemplate,
                context: {} // additional data can be passed via context
            });
        });
        
        result.data.events.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: eventTemplate,
                context: {} // additional data can be passed via context
            });
        });

        result.data.news.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: newsTemplate,
                context: {} // additional data can be passed via context
            });
        });

        result.data.cases.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: caseTemplate,
                context: {} // additional data can be passed via context
            });
        });

        result.data.pages.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: pageTemplate,
                context: {} // additional data can be passed via context
            });
        });

        result.data.pricing.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: pricingTemplate,
                context: {} // additional data can be passed via context
            });
        });
    });

};