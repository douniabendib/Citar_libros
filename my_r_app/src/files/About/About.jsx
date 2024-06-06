import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Citar Libros</h2>
            <p className='fs-17'>Searching for the perfect book can be a daunting task, with millions of titles available across countless genres and categories.</p>
            <p className='fs-17'>By allowing users to filter and sort results based on criteria like title, author, publication date, and genre, a book search can help readers quickly hone in on the books that are most relevant to their interests and preferences.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
