import React from 'react'
import Hero from './Hero'
import Service from "./Serviec";
import About from './About'
import Portfolio from './Portfolio';
import Testimonial from './Testimonial';
import BlogSection from './Blog';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Skill from './Skill';
import Pricing from './Pricing';


const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Service/>
      <Portfolio/>
      <Skill/>
      <Pricing/>
      <Testimonial/>
      <BlogSection/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Home