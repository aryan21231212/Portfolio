import React from 'react'
import styled from 'styled-components'
import vercel from '/public/vercel_logo.jpeg'

const Cards = () => {
  return (
    <Container>
        <div className='card'>
            <img src={vercel}/>
            <h1>Chatbot</h1>
            <a href="https://chat-bot-phi-ebon.vercel.app/">Click Here!</a>
        </div>
        <div className='card'>
            <img src={vercel}/>
            <h1>Text-to-Voice</h1>
            <a href="https://text-to-voice-drab.vercel.app/">Click Here!</a>
        </div>
        <div className='card'>
            <img src={vercel}/>
            <h1>Image-Generator</h1>
            <a href="https://img-generator-drab.vercel.app/">Click Here!</a>
        </div>
        <div className='card'>
            <img src={vercel}/>
            <h1>Wheather-App</h1>
            <a href="https://weather-app-kappa-sand-80.vercel.app/">Click Here!</a>
        </div>
        <div className='card'>
            <img src={vercel}/>
            <h1>Dice-Game</h1>
            <a href="https://dice-game-mu-swart.vercel.app/">Click Here!</a>
        </div>
        <div className='card'>
            <img src={vercel}/>
            <h1>To-Do-List</h1>
            <a href="https://to-do-list-silk-three-92.vercel.app/">Click Here!</a>
        </div>
        <div className='card'>
            <img src={vercel}/>
            <h1>Quotes-Generator</h1>
            <a href="https://quotes-drab-phi.vercel.app/">Click Here!</a>
        </div>
        <div className='card'>
            <img src={vercel}/>
            <h1>Github-Search-Engine</h1>
            <a href="https://github-search-engine-indol.vercel.app/">Click Here!</a>
        </div>
            <div className='card'>
                <img src={vercel}/>
                <h1>Currency-Converter</h1>
                <a href="https://currency-converter-two-indol.vercel.app/">Click Here!</a>
            </div>

           
    </Container>
  )
}

export default Cards

const Container = styled.div`
margin-top: 4rem;
display: flex;
justify-content: center;
flex-wrap: wrap;
    .card{
        height: 400px;
        width: 400px;
        display: flex;
        flex-direction: column;
        border: 2px solid white;
        align-items: center;
        border-radius: 0.5rem;
        margin-left:1.8rem;
        margin-top: 1.8rem;
        box-shadow: 2px 3px 16px;
        
    }
    .card img{
        height: 300px;
        width: 100%;
        background-size: cover;
        border-radius:0.5rem;
    }

    .card a{
        text-decoration: none;
        color: white;
        font-size: 1rem;
    }

`