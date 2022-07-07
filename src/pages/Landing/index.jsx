import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import video from '../../video/videoloop.mp4';

const Landing = () => {
  return(
    <>
      <video autoPlay muted loop className='bg-video'>
        <source src={video} type="video/mp4" />
      </video>
      <div className="landing">
        <div>
          <h1>Olá,</h1>
          <h1>Me chamo <span>Matheus Tkaczyk Ribeiro</span></h1>
          <h1>Desenvolvedor Web</h1>
          <ReactTypingEffect
            text={['Front-end', 'Back-end', 'Fullstack']}
            className={'typer'}
            speed={20}
            eraseSpeed={200}
            eraseDelay={400}
            typingDelay={200}
          />
        </div>
      </div>
    </>
  )
}

export default Landing;
