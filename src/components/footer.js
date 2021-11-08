import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDescription>
          <h1>Art Gallery</h1>
          <p>Open daily between 10am-5pm <br/> Friday until 10pm <br/> Admission Free</p>
        </FooterDescription>
        <FooterLinkItems>
          <FooterLinkTitle>About Us</FooterLinkTitle>
          <FooterLink to='/contact'>Contact</FooterLink>
          <FooterLink to='/about'>Press</FooterLink>
          <FooterLink to='/'>Jobs</FooterLink>
          <FooterLink to='/'>Feedback</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
      <FooterLinkItems>
          <FooterLinkTitle>Commercial</FooterLinkTitle>
          <FooterLink to='/'>Shop</FooterLink>
          <FooterLink to='/'>Picture library</FooterLink>
          <FooterLink to='/'>Hire</FooterLink>
          <FooterLink to='/'>Press</FooterLink>
        </FooterLinkItems>
      <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to='/'>Facebook</FooterLink>
          <FooterLink to='/'>Instagram</FooterLink>
          <FooterLink to='/'>Tiktok</FooterLink>
          <FooterLink to='/'>Youtube</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 3rem calc((100vw - 1200px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;
`

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`

const FooterDescription = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 2rem;
    color: #f26a2e;

    @media screen and (max-width: 400px) {
      padding: 1rem;
    }
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 1rem;
`

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: .5rem;
  font-size 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: .3s ease-out;
  }
`