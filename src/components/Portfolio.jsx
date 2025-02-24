import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'

const Portfolio = () => {
  return (
    <Container>
        <div className='my'>
            <h1>My Portfolio</h1>
        </div>
        <div className='para'>
        <p>As a web developer, I am passionate about building intuitive, user-friendly,</p>
        <p>and visually appealing websites that not only look great but also perform seamlessly across all devices.</p>
        <p>With a strong focus on responsive design and modern web technologies</p>
        </div>
        
      <Cards></Cards>
      <div className='but'> 
        <button><a href="https://vercel.com/aryan-pratap-singhs-projects">Show more</a></button>
      </div>
    </Container>
  )
}

export default Portfolio

const Container = styled.div`
  margin-top: 10rem;
  padding: 0 2rem;

  .my {
    text-align: center;
  }

  .my h1 {
    font-size: 40px;
    font-weight: 600;
  }

  .para {
    margin: 2rem 0;
    text-align: center;
  }

  .para p {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .but a {
    text-decoration: none;
    color: black;
  }

  .but {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  button {
    padding: 15px 20px;
    border-radius: 2rem;
    border: none;
    background-color: white;
    font-size: 1rem;
    cursor: pointer;
  }


  @media (max-width: 768px) {
    margin-top: 5rem;

    .my h1 {
      font-size: 32px;
    }

    .para p {
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }

    .but {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }

    button {
      padding: 12px 18px;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    margin-top: 4rem;

    .my h1 {
      font-size: 28px;
    }

    .para p {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    .but {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    button {
      padding: 10px 15px;
      font-size: 0.8rem;
    }
  }
`
