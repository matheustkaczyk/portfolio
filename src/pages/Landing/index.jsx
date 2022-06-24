import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Landing = () => {
  return(
    <div className="landing">
      <h1>Olá,</h1>
      <h1>Me chamo Matheus Tkaczyk</h1>
      <h1>Desenvolvedor Web</h1>
      <ReactTypingEffect
        text={['Frontend', 'Backend', 'Fullstack']}
        className={'typer'}
        speed={50}
        eraseSpeed={200}
        eraseDelay={200}
        typingDelay={200}
      />
    </div>
  )
}

export default Landing;
