import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Tower Block Game - Html - CSS - JavaScript.',
    github: 'https://github.com/Mauricio-Guerrero-Arciniegas/Tower-Block',
    demo: 'https://neon-lebkuchen-849d18.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'React E-Commerce with operational cart.',
    github: 'https://github.com/Mauricio-Guerrero-Arciniegas/Ecommerce',
    demo: 'https://app.netlify.com/sites/startling-longma-c9841a/overview'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Rick and Morty - Api - filter by category - search - ReactJS.',
    github: 'https://github.com/Mauricio-Guerrero-Arciniegas/Rick-Morty',
    demo: 'https://idyllic-vacherin-6055dc.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Functional calculator with Claymorphism - CSS.',
    github: 'https://github.com/Mauricio-Guerrero-Arciniegas/Calculator',
    demo: 'https://clinquant-bubblegum-ae85c1.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'ReactJS PokeDex - React Router - Redux Thunk.',
    github: 'https://github.com/Mauricio-Guerrero-Arciniegas/pokedex',
    demo: 'https://app.netlify.com/sites/stunning-narwhal-bfa531/overview'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Weather App - Api - HTML - CSS - JavaScript.',
    github: 'https://github.com/Mauricio-Guerrero-Arciniegas/WeatherApp',
    demo: 'https://jovial-tarsier-4344a0.netlify.app/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'E-Commerce HTML - CSS - JavaScript - ReactJS.',
    github: 'https://github.com/Mauricio-Guerrero-Arciniegas/e-commerce-react',
    demo: 'https://chipper-buttercream-177dd1.netlify.app/#/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio