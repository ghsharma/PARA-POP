import React from 'react'
import {logo} from '../assets';

const Hero = () => {
  return (
    <>
    <header className='w-full flex justify-center items-center flex-col'>
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <img src={logo} alt="parapop_logo"
      className="w-32 object-contain"/>


      <button type="button" onClick={() => window.open('https://github.com/ghsharma')} className='black_btn'>
        Github
      </button>
    </nav>    
    
    <h1 className='head_text'>
      Summarize Articles with <br className='max-md:hidden'/>
      <span className='orange_gradient'>PARA POP.</span>
    </h1>
      <p>An OPEN-AI CHAT-GPT4 alternative</p>
    <h2 className='desc'>
      Simplify your reading with Summarize, an open-source article summarizer that transforms lenghty articles into clear and concise summaries.
    </h2>
    
    </header>

    </>
  )
}

export default Hero;