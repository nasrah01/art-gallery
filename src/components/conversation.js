import React from 'react'
import styled from 'styled-components'
import { IoBookSharp } from 'react-icons/io'
import {MdCardMembership, MdAutorenew} from 'react-icons/md'
import {BsBookmarkHeart} from 'react-icons/bs'

const ConData = [
  {
    icon: (<IoBookSharp />),
    title: "title",
    description: "description"
  },
  {
    icon: (<MdCardMembership />),
    title: "title",
    description: "description"
  },
  {
    icon: (<MdAutorenew />),
    title: "title",
    description: "description"
  },
  {
    icon: (<BsBookmarkHeart />),
    title: "title",
    description: "description"
  }
]

function Conversation() {
  return (
    <ConversationContainer>
      <Heading>Art Conversation</Heading>
      <Wrapper>
        {ConData.map((item, index) => {
          return (
            <ConverstionBox key={index}>
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </ConverstionBox>
          )
        })}
      </Wrapper>
    </ConversationContainer>
  )
}

export default Conversation

const ConversationContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1200px) / 2);
`

const Heading = styled.h1`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ConverstionBox = styled.div``
const Icon = styled.div``
const Title = styled.div``
const Description = styled.div``