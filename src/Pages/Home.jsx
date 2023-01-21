import React from 'react';
import Footer from '../components/home/Footer/Footer';
import Header from '../components/home/Header';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import ogImage from '../assets/programming_tools.jpg';

export default function Home() {
  const pageUrl = window.location.href;
  return (
    <div>
      <SEO
        title='Home'
        ogUrl={pageUrl}
        metaDescription='Tools for helping you in your daily tasks.'
        ogImageUrl={ogImage}
        ogImageAlt='Fix tools og image'
      />
      <Header />
      <img alt='' />
      <Footer />
    </div>
  );
}
