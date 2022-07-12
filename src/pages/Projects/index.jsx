const Projects = () => {
  const projectsInfo = [
    {
      name: 'Webchat',
      text: 'Aplicação de webchat, feita utilizando React em seu front-end e um back-end em Node.js utilizando Socket.io.',
      githubLink: 'https://github.com/matheustkaczyk/web-chat-react',
      deploymentLink: 'https://webchattkaczyk.netlify.app/'
    },
    {
      name: 'EasyBank',
      text: 'Aplicação de uma Landing Page de um banco, feita utilizando React e SASS.',
      githubLink: 'https://github.com/matheustkaczyk/easybank-challenge',
      deploymentLink: 'https://easybank-one-omega.vercel.app/'
    },
    {
      name: 'QRCode Generator',
      text: 'Aplicação de um gerador de QR Code, feita utilizando React e SASS.',
      githubLink: 'https://qrcode-gen-tka.netlify.app/',
      deploymentLink: 'https://github.com/matheustkaczyk/qrcode-generator'
    },
    {
      name: 'Splitter',
      text: 'Aplicação que divide custos, podendo contemplar também a porcentagem de gorjeta, feita utilizando React e SASS.',
      githubLink: 'https://github.com/matheustkaczyk/splitter-challenge',
      deploymentLink: 'https://splitter-challenge.vercel.app/'
    },
  ]

  return(
    <section className="projects">
      <h2>Projetos</h2>
    </section>
  )
}

export default Projects;
