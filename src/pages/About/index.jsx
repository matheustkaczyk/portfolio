import euImage from '../../images/tkaczyk.jpg';

import CV from '../../assets/MATHEUS_TKACZYK_RIBEIRO_CV.pdf';

const About = () => {
  const date = new Date();

  const handleClick = () => {

  }

  return(
    <section className="about" id='about'>
      <div>
        <img src={euImage} alt="Foto Matheus Tkaczyk" />
        <div>
          <p>
            Sou <span>apaixonado</span> por ciência e tecnologia, no momento estou em transição de carreira para o mundo
            do desenvolvimento.<br/> Além de estudar por conta própria, fiz o bootcamp de 1 ano da Trybe, onde aprendi um novo universo de linguagens e tecnologias
            no mundo Fullstack.
          </p>
          <hr />
          <div className='wrapper'>
            <div>
              <span>Hobbies:</span>
              <ul>
                <li>Gaming</li>
                <li>Leitura</li>
                <li>Séries</li>
              </ul>
            </div>
            <a href={CV} download='MatheusTkaczykRibeiroCV'>Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
