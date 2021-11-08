import React from 'react'
import styled from 'styled-components'

const EventsData = [
  {
    title: "Membership",
    desc: "Join today, our members enjoy more",
  },
  {
    title: "Join the conversation",
    desc: "attend our events, enjoy the worlds greatest paintings",
  },
  {
    title: "Support us",
    desc: "support learning exhibitions, take part in fundraising appeals",
  },
  {
    title: "Access",
    desc: "A range of facilities in place to help everyone visit exhibitions and events",
  }
]

const Events = () => {
  return (
    <EventsContainer>
      <Heading>Get Involved</Heading>
      <Wrapper>
        {EventsData.map((item, index) => {
          return (
            <EventBox key={index}>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </EventBox>
          )
        })}
      </Wrapper>
    </EventsContainer>
  )
}

export default Events

const EventsContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1200px) / 2);
`

const Heading = styled.div`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const EventBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`

const Title = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: .5rem;
  font-weight: 700;
`

const Description = styled.p`
font-size: clamp(1rem, 1.5vw, 1.5rem);`