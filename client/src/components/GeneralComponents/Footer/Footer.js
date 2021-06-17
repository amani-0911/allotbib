import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import { Facebook, Fingerprint, Instagram, LinkedIn, Twitter, YouTube } from '@material-ui/icons';

function Footer() {
  return (
    <div className='footer-container'>
     
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About ALLOtbib</h2>
            <Link to='/sign-up'>Video consultation - Teleconsultation</Link>
            <Link to='/'>About Us</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Presse</Link>
            <Link to='/'>Need help ?</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Find your specialist</h2>
            <Link to='/'>generalist</Link>
            <Link to='/'>Skin</Link>
            <Link to='/'>Psychologist</Link>
            <Link to='/'>Obstetrics and medical gynecologist</Link>
            <Link to='/'>Allergist</Link>
            <Link to='/'>Pedicure-podiatrist</Link>
            <Link to='/'>Neurologist</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Frequent searches</h2>
            <Link to='/'>generalist</Link>
            <Link to='/'>Dr AMANI</Link>
            <Link to='/'>Skin</Link>
            <Link to='/'>Psychologist</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            ALL<Fingerprint className='navbar-icon' />tbib
            </Link>
          </div>
          <small className='website-rights'>ALLOTBIB © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <Facebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <Instagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <YouTube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <Twitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <LinkedIn />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
