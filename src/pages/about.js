import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Result Driven Digital Marketing Agency in Hubli. Websites, Social Media Marketing, Search Engine Optimization (SEO), Google Ads & PPC." />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About us
            </h1>

            <div className="mt-4 leading-loose">
              Result Driven Digital Marketing Agency in Hubli. Websites, Social Media Marketing, Search Engine Optimization (SEO), Google Ads & PPC.
              <br />
              <br />
              <h2 className="text-xl leading-tight font-semibold tracking-tight text-blue-600 sm:text-2xl">
              Let us handle your project, professionally.
            </h2>
            <br />
              <li>Search Engine Optimization</li>
              <li>Social Media Marketing</li>
              <li>Web Design & Development</li>
              <li>Pay Per Click</li>
              <li>Content Marketing</li><li>Email Marketing</li><li>Sales funnel & Landing Page</li>
              <br />
              <br />
              I'm happy to hear from you:
              <br />
              <a
                href="mailto:contact@johndoe.com"
                className="border-b border-gray-500 hover:border-blue-600 hover:text-blue-600"
              >
                contact@brandmesh.co
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <Img
              fluid={data.author.childImageSharp.fluid}
              alt="John Doe"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
    <Newsletter />
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    author: file(relativePath: { eq: "author.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 480, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
