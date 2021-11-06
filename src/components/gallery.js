import React from 'react'
import styled from 'styled-components'

const gallery = () => {
  return (
    <ProductsContainer>
      <ProductsHeading>Heading</ProductsHeading>
      <ProductsWrapper>Wrapper</ProductsWrapper>
    </ProductsContainer>
  )
}

export default gallery

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: coral;
  color: #fff;
`


const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #fff;
`


const ProductsWrapper = styled.div``
