import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaRegLightbulb} from 'react-icons/fa'
import { useStaticQuery, graphql } from 'gatsby'

const Stories = () => {
  const data = useStaticQuery(graphql`
  query StoriesQuery {
    allFile(
      filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["stories-1", "stories-2"]}}
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
  `)
  return (
    <StoriesContainer>
      <TopLine>
        Latest stories
      </TopLine>
      <Description>
        <p>Our Latest events and features</p>
      </Description>
      <ContentWrapper>
        <ColumnOne>
          <Story>
            <IoMdCheckmarkCircleOutline css={`font-size: 2rem; margin-bottom: .5rem;`}/>
            <h3>Picture of the month</h3>
            <p>Discover our curator's introduction of Poussin and the Dance, the exhibition introduction will take place in one of our lecture halls, a 20-minutes talk 
              available to book four times a day. 
            </p>
          </Story>
          <Story>
            <FaRegLightbulb css={`font-size: 2rem; margin-bottom: .5rem;`} />
            <h3>Behind the scenes</h3>
            <p>Take a look at what happens behind the scenes when we work on conserving our paintings, preparing exhibition halls and art aquisition.
            </p>
          </Story>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((image, key) => (
            <StoriesImages key={key} image={image.node.childImageSharp.gatsbyImageData} alt="gallery images" />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </StoriesContainer>
  )
}

export default Stories

const StoriesContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem calc((100vw - 1200px) / 2);
`
const TopLine = styled.div`
  color: #077bf1;
  font-size: 1rem;
  padding-left:2rem;
  margin-bottom: .7rem;
`

const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem,5vw, 2rem);
  font-weight: 700;
`


const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ColumnOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`


const Story = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
  }
`

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const StoriesImages = styled(GatsbyImage)`
  border-radius: 10px;
  height: 100%;
`
