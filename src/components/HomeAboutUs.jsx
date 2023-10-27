import React from 'react';
import Heading from "./Heading.jsx";

const HomeAboutUs = () => {
    return (
        <section className="about-us" id="about-us">
            <div className='about-us__text-container'>
                <Heading text1='O nas'/>
                <p className='about-us__text'>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className='about-us__signature' src="src/assets/Signature.svg" alt="signature"/>
            </div>
            <div className='about-us__img-container'>
                <img className='about-us__img' src="src/assets/People.jpg" alt="creators"/>
            </div>
        </section>
    );
};

export default HomeAboutUs;