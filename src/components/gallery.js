import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import {Button} from './styles/button'
import { FaCalendarTimes } from 'react-icons/fa'


const Gallery = ({heading}) => {

  const data = useStaticQuery(graphql`
  query GalleryQuery {
    allGalleryJson {
      edges {
        node {
          alt
          button
          name
          img {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
  `)

  function getGallery(data) {
    const galleryArray = [];
    data.allGalleryJson.edges.forEach((item, index) => {
      galleryArray.push(
        <ExhibitionCard key={index}>
          <ExhibitionImg image={item.node.img.childImageSharp.gatsbyImageData} alt={item.node.alt} />
          <ExhibitionInfo>
            <TextWrap>
              <FaCalendarTimes />
              <ExhibitionTitle>{item.node.name}</ExhibitionTitle>
            </TextWrap>
            <Button to="/gallery" primary="true" round="true" css={ `position: absolute; top: 420px; font-size: `}>{item.node.button}</Button>
          </ExhibitionInfo>
        </ExhibitionCard>
      )
    })
    return galleryArray
  }


  return (
    <ExhibitionContainer>
      <ExhibitionHeading>{heading}</ExhibitionHeading>
      <ExhibitionWrapper>{getGallery(data)}</ExhibitionWrapper>
    </ExhibitionContainer>
  )
}

export default Gallery

const ExhibitionContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1200px) / 2);
  color: #fff;
`


const ExhibitionHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`

const ExhibitionCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: .2s ease;
`

const ExhibitionImg = styled(GatsbyImage)`
  height: 100%;
  max-width: 100%;
  position: absolute;
  border-radius: 10px;
  filter: brightness(70%);
  transition: .4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const ExhibitionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 870px) {
    grid-template-columns: 1fr;
  }
`

const ExhibitionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`


const ExhibitionTitle = styled.div`
font-weight: 400;
font-size: 1rem;
margin-left: .5rem;
`

