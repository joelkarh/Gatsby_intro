import * as React from 'react';
import Layout from '../../components/Layout';
import {graphql, Link} from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
const BlogPost = ({data}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
    return (
        
        <Layout pageTitle={data.mdx.frontmatter.title}>
            {/* highlight-start */}
            <p>Posted: {data.mdx.frontmatter.date}</p>
            <GatsbyImage
            objectFit="contain"
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
            />
            <p>
            Photo Credit:{" "}
            <a href={data.mdx.frontmatter.hero_image_credit_link}>
            {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
            {/* highlight-end */}
            <div class="navigation">
              <Link to='/blog'>
              back
            </Link>
            </div>
            
        </Layout>
        
    )
}

// highlight-start
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter{
        title
        date (formatString: "D,MMMM, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`
// highlight-end

export default BlogPost
