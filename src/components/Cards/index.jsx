import { AiFillGithub } from 'react-icons/ai';

const Cards = ({ name, text, githubLink, deploymentLink }) => {
  return(
    <article className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>{name}</h3>
        </div>
        <div className="flip-card-back">
          <p>{text}</p>
          <div>
            <a href={githubLink} target='__blank'><AiFillGithub /></a>
            <a href={deploymentLink} target='__blank'>Visitar</a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Cards;
