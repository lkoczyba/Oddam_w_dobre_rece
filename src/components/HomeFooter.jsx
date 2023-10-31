import React from 'react';

const HomeFooter = () => {
    return (
        <footer className="footer" id="footer">
            <p className='footer__text'>Copyright by Coders Lab</p>
            <div className="footer__icon-container">
                <a href="https://www.facebook.com/"><img src="src/assets/Facebook.svg" alt="facebook icon"/></a>
                <a href="https://www.instagram.com/"><img src="src/assets/Instagram.svg" alt="instagram icon"/></a>
            </div>
        </footer>
    );
};

export default HomeFooter;