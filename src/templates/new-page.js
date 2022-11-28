import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import {getImage} from "gatsby-plugin-image";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const NewPageTemplate = (props) => {
    const { html, frontmatter: { title, heading, image, subheading }, contentComponent } = props
    const PageContent = contentComponent || Content;
    const heroImage = getImage(image) || image;

    return (
        <div>
            <FullWidthImage img={heroImage} title={heading} subheading={subheading} />

            <section className="section section--gradient">
                <div className="container">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="section">
                                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                    {title}
                                </h2>
                                <PageContent className="content" content={html} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

NewPageTemplate.propTypes = {
    frontmatter: PropTypes.object.isRequired,
    html: PropTypes.string,
    contentComponent: PropTypes.func,
};

const NewPage = ({ data }) => {
    const { markdownRemark: page } = data;

    return (
        <Layout>
            <NewPageTemplate
                contentComponent={HTMLContent}
                { ...page }
            />
        </Layout>
    );
};

NewPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default NewPage;

export const NewPageQuery = graphql`
  query NewPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "new-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
      }
    }
  }
`;
