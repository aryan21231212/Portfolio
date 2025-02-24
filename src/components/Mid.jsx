import React from 'react'
import styled from 'styled-components'
import aryan from '/public/aryan.png'

const Mid = () => {
    return (
        <Container>
            <div className='section'>
                <h3 className='sec'>Hello,</h3>
                <h1 className='sec'>I'm <span>Aryan</span></h1>
                <h1 className='sec'>Web Developer</h1>
                <p className='sec'> I am a skilled and passionate web developer with experience in creating <br /> visually appealing and user-friendly websites. </p>
                <button className='but'>
                    <span className="material-symbols-outlined">
                        work
                    </span>Hire me
                </button>
            </div>
            <img src={aryan} alt="aryan" />
        </Container>
    )
}

export default Mid

const Container = styled.div`
    margin-top: 5rem;
    height: 690px;
    position: relative;
    
    span {
        color: yellow;
    }

    .section {
        position: absolute;
        left: 200px;
        top: 20rem;
        z-index: 1;
        margin-bottom: 10rem; /* Add margin-bottom */
    }

    .sec {
        margin: 8px 0;
    }

    .section h3 {
        font-size: 30px;
        font-weight: 600;
        letter-spacing: 1.3px;
    }

    .section h1 {
        font-size: 55px;
        line-height: 60px;
    }

    .section p {
        margin-top: 1rem;
        font-size: 1.2rem;
        font-weight: 500;
    }

    img {
        top: 10rem; /* Shifted 5rem higher from 15rem */
        padding: 4px;
        position: absolute;
        z-index: -1;
        right: 100px;
        object-fit: cover;
        filter: drop-shadow(3px 4px 16px gray);
    }

    .but {
        display: flex;
        align-items: center;
        padding: 10px 18px;
        background-color: white;
        justify-content: space-evenly;
        font-weight: 500;
        font-size: 1rem;
        border-radius: 2.1rem;
        border: none;
        margin-top: 2rem;
        cursor: pointer;
    }

    .but span {
        color: black;
        margin-right: 10px;
    }

    /* Mobile Responsiveness */
    @media screen and (max-width: 768px) {
        .section {
            left: 50px;
            top: 10rem;
        }

        .section h1 {
            font-size: 42px;
        }

        .section p {
            font-size: 1rem;
            line-height: 1.5;
            margin-top: 0.5rem;
        }

        .but {
            font-size: 0.9rem;
            padding: 8px 16px;
        }

        img {
            top: 5rem; /* Shifted 5rem higher from 10rem */
            right: 30px;
            height: 250px;
            width: 250px;
        }
    }

    @media screen and (max-width: 480px) {
        margin-top: 3rem;
        height: auto;

        .section {
            left: 20px;
            top: 8rem;
            text-align: center;
        }

        .section h3 {
            font-size: 26px;
        }

        .section h1 {
            font-size: 36px;
        }

        .section p {
            font-size: 0.9rem;
            margin-top: 0.5rem;
        }

        .but {
            font-size: 0.8rem;
            padding: 8px 14px;
        }

        img {
            top: 2rem; 
            right: 10px;
            height: 200px;
            width: 200px;
        }
    }
`
