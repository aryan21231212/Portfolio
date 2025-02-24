import React, { useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'
import burger from '/public/burger.jpeg'
import logo from "/public/logo.png"

const Nav = () => {
    const [display, setdisplay] = useState(false)


    function home(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    function about(){
        window.scrollTo({
            top:800,
            behavior:'smooth'
        })
    }
    function portfolio(){
        window.scrollTo({
            top:1500,
            behavior:'smooth'
        })
    }
    function contact(){
        window.scrollTo({
            top:3500,
            behavior:'smooth'
        })
    }
    
    return (
        <Container>
            <img src={logo} alt="Logo" />
            <div className='navOptions'>
                <Link onClick={home} className='navopt'>Home</Link>
                <Link onClick={about} className='navopt'>About</Link>
                <Link onClick={portfolio} className='navopt'>Portfolio</Link>
                <Link onClick={contact} className='navopt'>Clients</Link>
            </div>
            <button onClick={contact}><span class="material-symbols-outlined">
                chat_bubble
            </span>Contact me</button>

            <img onClick={()=>{setdisplay(!display)}}  className='burg' src={burger} alt="Logo" />
            <div className='navOptions2' style={{display:display?'flex':'none'}}>
                <Link onClick={home} className='navopt2' >Home</Link>
                <Link onClick={about} className='navopt2'>About</Link>
                <Link onClick={portfolio} className='navopt2'>Portfolio</Link>
                <Link onClick={contact} className='navopt2'>Clients</Link>
            </div>
        </Container>
    )
}

export default Nav

const Container = styled.div`
    background-color: black;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    margin: 0 auto;
    margin-top: 20px;
    width: 100%;
    z-index: 3;

    img{
        height: 60px;
        width: 80px;
        background-size: cover;
    }
    .navopt{
        margin-left: 24px;
        font-size: 18px;
        line-height: 20px;
        cursor: pointer;
    }
    .navopt:hover{
        color: yellow;
        padding-bottom: 0.75rem;
        border-bottom:3px solid yellow ;
    }

    button{
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border-radius: 2rem;
        background: transparent;
        background-color: white;
        border: none;
        gap: 12px;
        font-size: 14px;
        cursor: pointer;
    }

    .burg{
        height: 40px;
        width: 40px;
        background-size: cover;
    }

    .navOptions2{
        position: absolute;
        width: 200px;
        right: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 60px;
        background-color: rgb(30,30,30);
        padding: 4px;
        padding-right: 5px;
        border-radius: 0.5rem;
    }

    .navopt2{
        margin-top: 0.5rem;
        font-size: 18px;
        line-height: 20px;
        cursor: pointer;
        background-color: black;
        padding: 4px;
        width: 100%;
    }
    .navopt2:hover{
        color: yellow;
        padding-bottom: 0.75rem;
        border-bottom:3px solid yellow ;
    }

    @media screen and (max-width:760px) {
        .navOptions{
            display: none;
        }
        button{
            display: none;
        }
    }
    @media screen and (min-width:760px) {
       .burg{
        display: none;
       }
    }
    
`