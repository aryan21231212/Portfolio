import React, { useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';
import inst from '/public/insta.jpeg'
import link from '/public/link.png'
import git from '/public/git.png'
import vercel from '/public/vercel_logo.jpeg'


const Contact = () => {
    const form = useRef();
       const sendEmail = (e) => {
          e.preventDefault();
          
      
          emailjs
            .sendForm('service_jlkuejb', 'template_1rk4p4b', form.current, {
              publicKey: 'MPX31EdrkoPREy2q0',
            })
            .then(
              (result) => {
                console.log(result.text);
                alert("Message sent..")
                e.target.reset()
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
        };
  return (
    <Container>
        <div>
        <div className='con'>
            <h1>Contact Me</h1>
        </div>
        <div className="para">Please fill out the form below to discuss any work opportunities</div>
        <form ref={form} onSubmit={sendEmail}>
            <div>
            <input type="text" name="from_name"  placeholder='Your name'/>
            </div>
            <div>
            <input type="email" name="user_email" placeholder='Your email'/>
            </div>
            <textarea id="noob" placeholder='Your Message' name="message" rows={4}></textarea>
            <div>
            <button type="submit" value="Send">Submit</button>
            </div>
            
     </form>
     
     <div className='handdle'>
       <a href="https://www.instagram.com/aryan_32__1/"> <img src={inst} /></a>
       <a href="https://www.linkedin.com/in/aryan-pratap-singh-51229a2a9"> <img src={link} /></a>
       <a href="https://github.com/aryan21231212"> <img src={git} /></a> 
       <a href="https://vercel.com/aryan-pratap-singhs-projects"><img src={vercel} /></a> 
     </div>
        </div>
        
    </Container>
  )
}

export default Contact

const Container = styled.div`
margin-top: 10rem;
    text-align: center;
    .con h1{
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 2rem;
    }
    form{
        margin-top: 2rem;
    }
    input{
        background-color: rgb(30,30,30);
        color: white;
        font-size: 1.2rem;
        margin: 0.6rem;
        padding: 5px;
        border-radius: 0.5rem;
        border: none;
        padding-left: 7px;
        width: 700px;
        line-height: 24px;
        height: 60px;
    }

    #noob{
        background-color: rgb(30,30,30);
        color: white;
        font-size: 1.2rem;
        margin: 0.6rem;
        padding: 5px;
        border-radius: 0.5rem;
        border: none;
        padding-left: 7px;
        width: 700px;
        line-height: 24px;
        resize: none;
    }

    button{
        margin-top:1rem;
        padding: 15px 25px;
        border-radius: 0.5rem;
        border: none;
        background-color: white;
        font-size: 1rem;
        width: 200px;
        cursor: pointer;
    }

    .handdle{
        margin-top:5rem;
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 5rem;
    }
    
    .handdle img{
        margin-left: 1rem;
        height: 60px;
        width: 60px;
        background-size: cover;
        border-radius: 50%;
        border: 2px solid white;
        cursor: pointer;
    }
    
`
