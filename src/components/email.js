import React from 'react'
import styled from 'styled-components'
import Image from '../assets/images/email-1.jpg'
import { Button } from "./styles/button"

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>Sign Up</h1>
        <p>Get the worlds greatest paintings to your inbox</p>
      </EmailContent>
      <form action='#'>
        <FormWrap>
          <label htmlFor='email'>
            <input type='email' placeholder='Enter your email' id='email' required/>
          </label>
          <Button as='button' type='submit' primary='true' round='true' css={`
          height: 50px;
          @media screen and (max-width: 768px) {
            width: 100%;
            min-width: 350px;
          }
          @media screen and (max-width: 400px) {
            width: 100%;
            min-width: 250px;
          }
          `}>Sign Up</Button>
        </FormWrap>
      </form>
    </EmailContainer>
    
  )
}

export default Email

const EmailContainer = styled.div`
  background: linear-gradient(180deg, 
    rgba(0, 0, 0, .5) 0%, 
    rgba(0, 0, 0, .5) 50%, rgba(0, 0, 0, .1) 100%
    ), 
    url(${Image}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1200px) / 2);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const EmailContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      text-align: center;
      margin-bottom: 1rem;
      font-size: clamp(1rem, 5vw, 3rem);
      padding: 0 1rem;
    }

    p {
      text-align: center;
      margin-bottom: 2rem;
      font-size: clamp(1rem, 5vw, 1.5rem);
      padding: 0 1rem;
    }

    form {
      z-index: 3;
    }
`

const FormWrap = styled.div`
    input {
      padding: 1rem 1.5rem;
      outline: none;
      width: 350px;
      height: 50px;
      border-radius: 50px;
      border: none;
      margin-right: 1rem;

      @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        margin-bottom: 1rem;
        width: 100%;
        margin-right: 0;
      }
    }
`
