import React from 'react'
import styled from 'styled-components'
import web from '/public/web.jpeg'
import sql from '/public/sql.jpg'
import prob from '/public/problem.jpg'

const About = () => {
  return (
    <Container>
        <div className='ido'>
        <h1>What I Do</h1>
        <p>I am skilled and passionate web developer with experience in creating user-friendly websites.</p>
        <p>I have a strong understanding of React and a keen eye for details. I am proficient in HTML, CSS,</p>
        <p>and Javascript, as well as CSS and JavaScript frameworks like Tailwind and React.js</p>
        </div>

        <div className='skills'>
            <div className='skill'>
                <img src={web} alt="web development" />
                <div className='content'>
                    <h1>Web Development</h1>
                    <p>Crafting seamless, dynamic, and user-friendly experiences by building the future of the web.</p>
                </div>
            </div>
            <div className='skill'>
                <img src={sql} alt="sql" />
                <div className='content'>
                    <h1>SQL</h1>
                    <p>Unlocking the power of data with efficient queries and seamless database management.</p>
                </div>
            </div>
            <div className='skill'>
                <img src={prob} alt="problem solving" />
                <div className='content'>
                    <h1>Problem Solving</h1>
                    <p>Using creativity, logic, and persistence to turn complex challenges into effective solutions.</p>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default About

const Container = styled.div`
  text-align: center;

  .ido h1 {
    font-size: 40px;
    font-weight: 600;
    margin: 1rem 0;
  }

  .ido p {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .skills {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }

  .skill {
    background-color: rgb(30, 30, 30);
    width: 850px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.5rem;
    padding-right: 15px;
    margin-bottom: 1.2rem;
  }

  .skill img {
    height: 60px;
    width: 60px;
    margin-left: 1rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }


  @media screen and (max-width: 768px) {
    .ido h1 {
      font-size: 32px;
    }

    .ido p {
      font-size: 1rem;
      line-height: 1.6;
    }

    .skills {
      margin-top: 3rem;
    }

    .skill {
      width: 90%; 
      flex-direction: column;
      height: auto;
      padding: 1rem;
    }

    .skill img {
      height: 50px;
      width: 50px;
    }

    .content {
      text-align: left;
      padding-left: 1rem;
    }
  }

  @media screen and (max-width: 480px) {
    .ido h1 {
      font-size: 28px;
    }

    .ido p {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .skills {
      margin-top: 2rem;
    }

    .skill {
      width: 100%; 
      margin-bottom: 1rem;
      height: auto;
    }

    .skill img {
      height: 45px;
      width: 45px;
    }

    .content h1 {
      font-size: 1.2rem;
    }

    .content p {
      font-size: 0.9rem;
    }
  }
`
